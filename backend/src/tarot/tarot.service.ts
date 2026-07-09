import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { tError } from '../i18n/errors';
import {
  buildTarotSystemPrompt,
  getSpreadTitle,
  getTarotLabels,
} from '../i18n/prompts';
import { localeLanguageNames, resolveLocale, type SupportedLocale } from '../i18n/locales';
import type { InterpretReadingDto } from './dto/interpret-reading.dto';

interface DeepSeekMessage {
  role: 'system' | 'user';
  content: string;
}

interface DeepSeekResponse {
  choices?: Array<{
    message?: {
      content?: string;
    };
  }>;
}

const VALID_SPREADS: InterpretReadingDto['spreadId'][] = [
  'yes-no',
  'card-of-day',
  'three-cards',
  'celtic-cross',
  'horseshoe',
  'relationship-pyramid',
  'star',
  'tree-of-life',
  'year',
  'situation',
];

@Injectable()
export class TarotService {
  private readonly logger = new Logger(TarotService.name);

  constructor(private readonly config: ConfigService) {}

  async interpretReading(dto: InterpretReadingDto): Promise<{ interpretation: string }> {
    const locale = resolveLocale(dto.locale);
    this.validateDto(dto, locale);

    const apiKey = this.config.get<string>('deepseek.apiKey');

    if (!apiKey) {
      throw new InternalServerErrorException(tError(locale, 'serviceUnavailable'));
    }

    const spreadTitle = getSpreadTitle(locale, dto.spreadId);
    const labels = getTarotLabels(locale);
    const cardsDescription = dto.cards
      .map((c) => {
        const position = c.position ? `«${c.position}»` : '';
        const orientation = c.reversed ? labels.reversed : labels.upright;
        return position
          ? `${position}: «${c.cardName}» (${orientation})`
          : `«${c.cardName}» (${orientation})`;
      })
      .join('\n');

    const systemPrompt = buildTarotSystemPrompt(locale, localeLanguageNames[locale]);
    const userPrompt = this.buildUserPrompt(dto, locale, spreadTitle, labels, cardsDescription);

    const messages: DeepSeekMessage[] = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ];

    const maxTokens = dto.cards.length > 6 ? 4000 : 2500;
    const interpretation = await this.callDeepSeek(apiKey, messages, maxTokens, locale);
    return { interpretation };
  }

  private buildUserPrompt(
    dto: InterpretReadingDto,
    locale: SupportedLocale,
    spreadTitle: string,
    labels: ReturnType<typeof getTarotLabels>,
    cardsDescription: string,
  ): string {
    const prompts: Record<SupportedLocale, Record<string, string>> = {
      en: {
        'yes-no':
          `Spread: «${spreadTitle}».\n` +
          `User question: «${dto.question}».\n` +
          `Card drawn: «${dto.cards[0].cardName}» in ${dto.cards[0].reversed ? labels.reversedPosition : labels.uprightPosition} position.\n\n` +
          'Interpret this card in the context of the question. At the end, clearly state whether the situation leans toward "yes" or "no", and briefly explain why. If the answer is ambiguous, say so honestly.',
        'card-of-day':
          `Spread: «${spreadTitle}».\n` +
          `User question or intention: «${dto.question}».\n` +
          `Card of the day: «${dto.cards[0].cardName}» in ${dto.cards[0].reversed ? labels.reversedPosition : labels.uprightPosition} position.\n\n` +
          'Explain what energy and lesson this card brings for today in the context of the user question. Give practical advice on what to pay attention to and how to live this day mindfully.',
        default:
          `Spread: «${spreadTitle}».\n` +
          `User question: «${dto.question}».\n\n` +
          `Cards drawn:\n${cardsDescription}\n\n` +
          'Give a holistic interpretation of the spread. Explain the meaning of each card in its position, show the connections between the cards, and end with an overall conclusion and practical advice.',
      },
      fr: {
        'yes-no':
          `Tirage : « ${spreadTitle} ».\n` +
          `Question de l'utilisateur : « ${dto.question} ».\n` +
          `Carte tirée : « ${dto.cards[0].cardName} » en position ${dto.cards[0].reversed ? labels.reversedPosition : labels.uprightPosition}.\n\n` +
          'Interprète cette carte dans le contexte de la question. À la fin, indique clairement si la situation penche vers « oui » ou « non », et explique brièvement pourquoi. Si la réponse est ambiguë, dis-le honnêtement.',
        'card-of-day':
          `Tirage : « ${spreadTitle} ».\n` +
          `Question ou intention de l'utilisateur : « ${dto.question} ».\n` +
          `Carte du jour : « ${dto.cards[0].cardName} » en position ${dto.cards[0].reversed ? labels.reversedPosition : labels.uprightPosition}.\n\n` +
          "Explique quelle énergie et quel enseignement cette carte apporte pour aujourd'hui dans le contexte de la question. Donne un conseil pratique sur ce à quoi prêter attention.",
        default:
          `Tirage : « ${spreadTitle} ».\n` +
          `Question de l'utilisateur : « ${dto.question} ».\n\n` +
          `Cartes tirées :\n${cardsDescription}\n\n` +
          'Donne une interprétation globale du tirage. Explique le sens de chaque carte dans sa position, montre les liens entre les cartes et termine par une conclusion générale et un conseil pratique.',
      },
      es: {
        'yes-no':
          `Tirada: «${spreadTitle}».\n` +
          `Pregunta del usuario: «${dto.question}».\n` +
          `Carta sacada: «${dto.cards[0].cardName}» en posición ${dto.cards[0].reversed ? labels.reversedPosition : labels.uprightPosition}.\n\n` +
          'Interpreta esta carta en el contexto de la pregunta. Al final, indica claramente si la situación se inclina hacia "sí" o "no", y explica brevemente por qué. Si la respuesta es ambigua, dilo con honestidad.',
        'card-of-day':
          `Tirada: «${spreadTitle}».\n` +
          `Pregunta o intención del usuario: «${dto.question}».\n` +
          `Carta del día: «${dto.cards[0].cardName}» en posición ${dto.cards[0].reversed ? labels.reversedPosition : labels.uprightPosition}.\n\n` +
          'Explica qué energía y lección trae esta carta para hoy en el contexto de la pregunta. Da un consejo práctico sobre qué tener en cuenta.',
        default:
          `Tirada: «${spreadTitle}».\n` +
          `Pregunta del usuario: «${dto.question}».\n\n` +
          `Cartas sacadas:\n${cardsDescription}\n\n` +
          'Da una interpretación integral de la tirada. Explica el significado de cada carta en su posición, muestra las conexiones entre las cartas y termina con una conclusión general y un consejo práctico.',
      },
      pt: {
        'yes-no':
          `Tiragem: «${spreadTitle}».\n` +
          `Pergunta do usuário: «${dto.question}».\n` +
          `Carta sorteada: «${dto.cards[0].cardName}» em posição ${dto.cards[0].reversed ? labels.reversedPosition : labels.uprightPosition}.\n\n` +
          'Interprete esta carta no contexto da pergunta. No final, indique claramente se a situação tende a "sim" ou "não", e explique brevemente por quê. Se a resposta for ambígua, diga isso com honestidade.',
        'card-of-day':
          `Tiragem: «${spreadTitle}».\n` +
          `Pergunta ou intenção do usuário: «${dto.question}».\n` +
          `Carta do dia: «${dto.cards[0].cardName}» em posição ${dto.cards[0].reversed ? labels.reversedPosition : labels.uprightPosition}.\n\n` +
          'Explique que energia e lição esta carta traz para hoje no contexto da pergunta. Dê um conselho prático sobre o que observar.',
        default:
          `Tiragem: «${spreadTitle}».\n` +
          `Pergunta do usuário: «${dto.question}».\n\n` +
          `Cartas sorteadas:\n${cardsDescription}\n\n` +
          'Dê uma interpretação holística da tiragem. Explique o significado de cada carta em sua posição, mostre as conexões entre as cartas e termine com uma conclusão geral e um conselho prático.',
      },
      de: {
        'yes-no':
          `Legung: «${spreadTitle}».\n` +
          `Frage des Nutzers: «${dto.question}».\n` +
          `Gezogene Karte: «${dto.cards[0].cardName}» in ${dto.cards[0].reversed ? labels.reversedPosition : labels.uprightPosition} Lage.\n\n` +
          'Deute diese Karte im Kontext der Frage. Formuliere am Ende klar, ob sich die Situation eher zu „ja“ oder „nein“ neigt, und erkläre kurz warum. Wenn die Antwort mehrdeutig ist, sage das ehrlich.',
        'card-of-day':
          `Legung: «${spreadTitle}».\n` +
          `Frage oder Absicht des Nutzers: «${dto.question}».\n` +
          `Karte des Tages: «${dto.cards[0].cardName}» in ${dto.cards[0].reversed ? labels.reversedPosition : labels.uprightPosition} Lage.\n\n` +
          'Erkläre, welche Energie und welche Lektion diese Karte für heute im Kontext der Frage bringt. Gib praktischen Rat, worauf zu achten ist.',
        default:
          `Legung: «${spreadTitle}».\n` +
          `Frage des Nutzers: «${dto.question}».\n\n` +
          `Gezogene Karten:\n${cardsDescription}\n\n` +
          'Gib eine ganzheitliche Deutung der Legung. Erkläre die Bedeutung jeder Karte in ihrer Position, zeige Verbindungen zwischen den Karten und schließe mit einer Gesamtaussage und praktischem Rat.',
      },
      ru: {
        'yes-no':
          `Расклад: «${spreadTitle}».\n` +
          `Вопрос пользователя: «${dto.question}».\n` +
          `Выпала карта: «${dto.cards[0].cardName}» в ${dto.cards[0].reversed ? labels.reversedPosition : labels.uprightPosition} положении.\n\n` +
          'Дай толкование этой карты в контексте вопроса. В конце чётко сформулируй ответ: склоняется ли ситуация к «да» или «нет», и кратко объясни почему. Если ответ неоднозначен — честно скажи об этом.',
        'card-of-day':
          `Расклад: «${spreadTitle}».\n` +
          `Вопрос или намерение пользователя: «${dto.question}».\n` +
          `Карта дня: «${dto.cards[0].cardName}» в ${dto.cards[0].reversed ? labels.reversedPosition : labels.uprightPosition} положении.\n\n` +
          'Расшифруй, какую энергию и урок несёт эта карта для сегодняшнего дня в контексте вопроса пользователя. Дай практический совет — на что обратить внимание и как прожить этот день осознанно.',
        default:
          `Расклад: «${spreadTitle}».\n` +
          `Вопрос пользователя: «${dto.question}».\n\n` +
          `Выпавшие карты:\n${cardsDescription}\n\n` +
          'Дай целостное толкование расклада. Расшифруй значение каждой карты в её позиции, покажи связи между картами и в конце дай общий вывод и практический совет.',
      },
    };

    const localePrompts = prompts[locale];
    if (dto.spreadId === 'yes-no') return localePrompts['yes-no'];
    if (dto.spreadId === 'card-of-day') return localePrompts['card-of-day'];
    return localePrompts.default;
  }

  private async callDeepSeek(
    apiKey: string,
    messages: DeepSeekMessage[],
    maxTokens: number,
    locale: SupportedLocale,
  ): Promise<string> {
    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages,
        temperature: 0.8,
        max_tokens: maxTokens,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      this.logger.error(`DeepSeek API error: ${response.status} ${errorText}`);
      throw new InternalServerErrorException(tError(locale, 'interpretationFailed'));
    }

    const data = (await response.json()) as DeepSeekResponse;
    const content = data.choices?.[0]?.message?.content?.trim();

    if (!content) {
      throw new InternalServerErrorException(tError(locale, 'emptyResponse'));
    }

    return content;
  }

  private validateDto(dto: InterpretReadingDto, locale: SupportedLocale): void {
    if (!VALID_SPREADS.includes(dto.spreadId)) {
      throw new BadRequestException(tError(locale, 'invalidSpread'));
    }

    if (!dto.question?.trim()) {
      throw new BadRequestException(tError(locale, 'emptyQuestion'));
    }

    if (!Array.isArray(dto.cards) || dto.cards.length === 0) {
      throw new BadRequestException(tError(locale, 'emptyCards'));
    }

    for (const card of dto.cards) {
      if (!card.cardName?.trim()) {
        throw new BadRequestException(tError(locale, 'emptyCardName'));
      }
      if (typeof card.reversed !== 'boolean') {
        throw new BadRequestException(tError(locale, 'invalidReversed'));
      }
    }
  }
}
