import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { tError } from '../i18n/errors';
import { buildDreamSystemPrompt, getDictionaryTitle } from '../i18n/prompts';
import { localeLanguageNames, resolveLocale, type SupportedLocale } from '../i18n/locales';
import type { InterpretDreamDto } from './dto/interpret-dream.dto';

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

const VALID_DICTIONARIES: InterpretDreamDto['dictionaryId'][] = [
  'freudian',
  'jungian',
  'miller',
  'vanga',
  'nostradamus',
  'loff',
  'esoteric',
  'islamic',
  'vedic',
  'chinese',
];

@Injectable()
export class DreamsService {
  private readonly logger = new Logger(DreamsService.name);

  constructor(private readonly config: ConfigService) {}

  async interpretDream(dto: InterpretDreamDto): Promise<{ interpretation: string }> {
    const locale = resolveLocale(dto.locale);
    this.validateDto(dto, locale);

    const apiKey = this.config.get<string>('deepseek.apiKey');

    if (!apiKey) {
      throw new InternalServerErrorException(tError(locale, 'serviceUnavailable'));
    }

    const dictionaryTitle = getDictionaryTitle(locale, dto.dictionaryId);
    const systemPrompt = buildDreamSystemPrompt(locale, localeLanguageNames[locale]);
    const userPrompt = this.buildUserPrompt(dto, locale, dictionaryTitle);

    const messages: DeepSeekMessage[] = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ];

    const interpretation = await this.callDeepSeek(apiKey, messages, 3000, locale);
    return { interpretation };
  }

  private buildUserPrompt(
    dto: InterpretDreamDto,
    locale: SupportedLocale,
    dictionaryTitle: string,
  ): string {
    const prompts: Record<SupportedLocale, string> = {
      en:
        `You are an experienced dream interpreter. Use the style and methodology of the «${dictionaryTitle}» dream dictionary.\n` +
        `The user described their dream: «${dto.description.trim()}».\n` +
        'Give a detailed symbolic interpretation: highlight key images, explain their meaning according to the chosen dictionary, and provide an overall conclusion.',
      fr:
        `Tu es un interprète de rêves expérimenté. Utilise le style et la méthodologie du dictionnaire de rêves « ${dictionaryTitle} ».\n` +
        `L'utilisateur a décrit son rêve : « ${dto.description.trim()} ».\n` +
        'Donne une interprétation symbolique détaillée : identifie les images clés, explique leur sens selon le dictionnaire choisi et fournis une conclusion générale.',
      es:
        `Eres un intérprete de sueños experimentado. Usa el estilo y la metodología del diccionario de sueños «${dictionaryTitle}».\n` +
        `El usuario describió su sueño: «${dto.description.trim()}».\n` +
        'Da una interpretación simbólica detallada: destaca las imágenes clave, explica su significado según el diccionario elegido y ofrece una conclusión general.',
      pt:
        `Você é um intérprete de sonhos experiente. Use o estilo e a metodologia do dicionário de sonhos «${dictionaryTitle}».\n` +
        `O usuário descreveu o sonho: «${dto.description.trim()}».\n` +
        'Dê uma interpretação simbólica detalhada: destaque as imagens-chave, explique seu significado de acordo com o dicionário escolhido e forneça uma conclusão geral.',
      de:
        `Du bist ein erfahrener Traumdeuter. Verwende den Stil und die Methodik des Traumlexikons «${dictionaryTitle}».\n` +
        `Der Nutzer beschrieb seinen Traum: «${dto.description.trim()}».\n` +
        'Gib eine ausführliche symbolische Deutung: hebe Schlüsselbilder hervor, erkläre ihre Bedeutung gemäß dem gewählten Lexikon und ziehe eine Gesamtschau.',
      ru:
        `Ты — опытный толкователь снов. Используй стиль и методологию сонника «${dictionaryTitle}».\n` +
        `Пользователь описал сон: «${dto.description.trim()}».\n` +
        'Дай развёрнутое символическое толкование: выдели ключевые образы, объясни их значение согласно выбранному соннику, дай общий вывод.',
    };

    return prompts[locale];
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

  private validateDto(dto: InterpretDreamDto, locale: SupportedLocale): void {
    if (!VALID_DICTIONARIES.includes(dto.dictionaryId)) {
      throw new BadRequestException(tError(locale, 'invalidDictionary'));
    }

    if (!dto.description?.trim()) {
      throw new BadRequestException(tError(locale, 'emptyDescription'));
    }

    if (dto.description.trim().length < 10) {
      throw new BadRequestException(tError(locale, 'descriptionTooShort'));
    }
  }
}
