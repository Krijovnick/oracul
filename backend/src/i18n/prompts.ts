import type { SupportedLocale } from './locales';

const spreadTitles: Record<SupportedLocale, Record<string, string>> = {
  en: {
    'yes-no': 'Yes/No Answer',
    'card-of-day': 'Card of the Day',
    'three-cards': 'Three Cards (Past / Present / Future)',
    'celtic-cross': 'Celtic Cross',
    horseshoe: 'Horseshoe of Fortune',
    'relationship-pyramid': 'Relationship Pyramid',
    star: 'The Star',
    'tree-of-life': 'Tree of Life',
    year: 'Year Spread',
    situation: 'Situation Spread',
  },
  fr: {
    'yes-no': 'Réponse oui/non',
    'card-of-day': 'Carte du jour',
    'three-cards': 'Trois cartes (Passé / Présent / Futur)',
    'celtic-cross': 'Croix celtique',
    horseshoe: 'Fer à cheval de la chance',
    'relationship-pyramid': 'Pyramide relationnelle',
    star: 'L’Étoile',
    'tree-of-life': 'Arbre de vie',
    year: 'Tirage annuel',
    situation: 'Tirage de situation',
  },
  es: {
    'yes-no': 'Respuesta sí/no',
    'card-of-day': 'Carta del día',
    'three-cards': 'Tres cartas (Pasado / Presente / Futuro)',
    'celtic-cross': 'Cruz celta',
    horseshoe: 'Herradura de la suerte',
    'relationship-pyramid': 'Pirámide de relaciones',
    star: 'La Estrella',
    'tree-of-life': 'Árbol de la vida',
    year: 'Tirada anual',
    situation: 'Tirada de situación',
  },
  pt: {
    'yes-no': 'Resposta sim/não',
    'card-of-day': 'Carta do dia',
    'three-cards': 'Três cartas (Passado / Presente / Futuro)',
    'celtic-cross': 'Cruz celta',
    horseshoe: 'Ferradura da sorte',
    'relationship-pyramid': 'Pirâmide de relacionamentos',
    star: 'A Estrela',
    'tree-of-life': 'Árvore da vida',
    year: 'Tiragem anual',
    situation: 'Tiragem de situação',
  },
  de: {
    'yes-no': 'Ja/Nein-Antwort',
    'card-of-day': 'Karte des Tages',
    'three-cards': 'Drei Karten (Vergangenheit / Gegenwart / Zukunft)',
    'celtic-cross': 'Keltisches Kreuz',
    horseshoe: 'Hufeisen des Glücks',
    'relationship-pyramid': 'Beziehungspyramide',
    star: 'Der Stern',
    'tree-of-life': 'Lebensbaum',
    year: 'Jahreslegung',
    situation: 'Situationslegung',
  },
  ru: {
    'yes-no': 'Ответ да/нет',
    'card-of-day': 'Карта дня',
    'three-cards': 'Три карты (Прошлое / Настоящее / Будущее)',
    'celtic-cross': 'Кельтский крест',
    horseshoe: 'Подкова удачи',
    'relationship-pyramid': 'Пирамида отношений',
    star: 'Звезда',
    'tree-of-life': 'Древо жизни',
    year: 'Расклад на год',
    situation: 'Расклад на ситуацию',
  },
};

const dictionaryTitles: Record<SupportedLocale, Record<string, string>> = {
  en: {
    freudian: 'Freudian',
    jungian: 'Jungian',
    miller: "Miller's",
    vanga: "Vanga's",
    nostradamus: "Nostradamus's",
    loff: "Loff's",
    esoteric: 'Esoteric',
    islamic: 'Islamic',
    vedic: 'Vedic',
    chinese: 'Chinese',
  },
  fr: {
    freudian: 'Freudien',
    jungian: 'Jungien',
    miller: 'Miller',
    vanga: 'Vanga',
    nostradamus: 'Nostradamus',
    loff: 'Loff',
    esoteric: 'Ésotérique',
    islamic: 'Islamique',
    vedic: 'Védique',
    chinese: 'Chinois',
  },
  es: {
    freudian: 'Freudiano',
    jungian: 'Junguiano',
    miller: 'Miller',
    vanga: 'Vanga',
    nostradamus: 'Nostradamus',
    loff: 'Loff',
    esoteric: 'Esotérico',
    islamic: 'Islámico',
    vedic: 'Védico',
    chinese: 'Chino',
  },
  pt: {
    freudian: 'Freudiano',
    jungian: 'Junguiano',
    miller: 'Miller',
    vanga: 'Vanga',
    nostradamus: 'Nostradamus',
    loff: 'Loff',
    esoteric: 'Esotérico',
    islamic: 'Islâmico',
    vedic: 'Védico',
    chinese: 'Chinês',
  },
  de: {
    freudian: 'Freudisch',
    jungian: 'Jungianisch',
    miller: 'Miller',
    vanga: 'Wanga',
    nostradamus: 'Nostradamus',
    loff: 'Loff',
    esoteric: 'Esoterisch',
    islamic: 'Islamisch',
    vedic: 'Vedisch',
    chinese: 'Chinesisch',
  },
  ru: {
    freudian: 'Фрейдовский',
    jungian: 'Юнгианский',
    miller: 'Миллера',
    vanga: 'Ванги',
    nostradamus: 'Нострадамуса',
    loff: 'Лоффа',
    esoteric: 'Эзотерический',
    islamic: 'Исламский',
    vedic: 'Ведический',
    chinese: 'Китайский',
  },
};

export function getSpreadTitle(locale: SupportedLocale, spreadId: string): string {
  return spreadTitles[locale][spreadId] ?? spreadTitles.en[spreadId] ?? spreadId;
}

export function getDictionaryTitle(locale: SupportedLocale, dictionaryId: string): string {
  return dictionaryTitles[locale][dictionaryId] ?? dictionaryTitles.en[dictionaryId] ?? dictionaryId;
}

interface TarotPromptLabels {
  reversed: string;
  upright: string;
  reversedPosition: string;
  uprightPosition: string;
}

const tarotLabels: Record<SupportedLocale, TarotPromptLabels> = {
  en: {
    reversed: 'reversed',
    upright: 'upright',
    reversedPosition: 'reversed',
    uprightPosition: 'upright',
  },
  fr: {
    reversed: 'renversée',
    upright: 'droit',
    reversedPosition: 'renversé',
    uprightPosition: 'droit',
  },
  es: {
    reversed: 'invertida',
    upright: 'erguida',
    reversedPosition: 'invertido',
    uprightPosition: 'erguido',
  },
  pt: {
    reversed: 'invertida',
    upright: 'vertical',
    reversedPosition: 'invertido',
    uprightPosition: 'vertical',
  },
  de: {
    reversed: 'umgekehrt',
    upright: 'aufrecht',
    reversedPosition: 'umgekehrter',
    uprightPosition: 'aufrechter',
  },
  ru: {
    reversed: 'перевёрнутое',
    upright: 'прямое',
    reversedPosition: 'перевёрнутом',
    uprightPosition: 'прямом',
  },
};

export function getTarotLabels(locale: SupportedLocale): TarotPromptLabels {
  return tarotLabels[locale];
}

export function buildTarotSystemPrompt(locale: SupportedLocale, languageName: string): string {
  const prompts: Record<SupportedLocale, string> = {
    en: `You are a wise tarot reader and spiritual guide. Respond in ${languageName}, vividly and gently. Do not give medical, legal, or financial advice. Help the person make sense of their situation through the symbolism of the cards.`,
    fr: `Tu es un tarologue sage et un guide spirituel. Réponds en ${languageName}, de manière imagée et bienveillante. Ne donne pas de conseils médicaux, juridiques ou financiers. Aide la personne à comprendre sa situation à travers la symbolique des cartes.`,
    es: `Eres un sabio tarotista y guía espiritual. Responde en ${languageName}, de forma vívida y delicada. No des consejos médicos, legales ni financieros. Ayuda a la persona a comprender su situación a través del simbolismo de las cartas.`,
    pt: `Você é um sábio tarólogo e guia espiritual. Responda em ${languageName}, de forma vívida e delicada. Não dê conselhos médicos, jurídicos ou financeiros. Ajude a pessoa a compreender sua situação através do simbolismo das cartas.`,
    de: `Du bist ein weiser Tarotleser und spiritueller Begleiter. Antworte auf ${languageName}, bildhaft und behutsam. Gib keine medizinischen, rechtlichen oder finanziellen Ratschläge. Hilf der Person, ihre Situation durch die Symbolik der Karten zu verstehen.`,
    ru: `Ты — мудрый таролог и духовный наставник. Отвечай на ${languageName}, образно и бережно. Не давай медицинских, юридических или финансовых советов. Помогай человеку осмыслить ситуацию через символику карт.`,
  };

  return prompts[locale];
}

export function buildDreamSystemPrompt(locale: SupportedLocale, languageName: string): string {
  const prompts: Record<SupportedLocale, string> = {
    en: `You are an experienced dream interpreter. Respond in ${languageName}, vividly and gently. Do not give medical, legal, or financial advice. Help the person understand their dream through the symbolism of the chosen dream dictionary.`,
    fr: `Tu es un interprète de rêves expérimenté. Réponds en ${languageName}, de manière imagée et bienveillante. Ne donne pas de conseils médicaux, juridiques ou financiers. Aide la personne à comprendre son rêve à travers la symbolique du dictionnaire choisi.`,
    es: `Eres un intérprete de sueños experimentado. Responde en ${languageName}, de forma vívida y delicada. No des consejos médicos, legales ni financieros. Ayuda a la persona a comprender su sueño a través del simbolismo del diccionario elegido.`,
    pt: `Você é um intérprete de sonhos experiente. Responda em ${languageName}, de forma vívida e delicada. Não dê conselhos médicos, jurídicos ou financeiros. Ajude a pessoa a compreender seu sonho através do simbolismo do dicionário escolhido.`,
    de: `Du bist ein erfahrener Traumdeuter. Antworte auf ${languageName}, bildhaft und behutsam. Gib keine medizinischen, rechtlichen oder finanziellen Ratschläge. Hilf der Person, ihren Traum durch die Symbolik des gewählten Traumlexikons zu verstehen.`,
    ru: `Ты — опытный толкователь снов. Отвечай на ${languageName}, образно и бережно. Не давай медицинских, юридических или финансовых советов. Помогай человеку осмыслить сон через символику выбранного сонника.`,
  };

  return prompts[locale];
}
