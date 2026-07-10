import type { SpreadId } from '@/shared/config/spreads';
import type { DreamDictionaryId } from '@/shared/config/dream-dictionaries';

export interface SpreadMessages {
  title: string;
  description: string;
  positions: string[];
  about: string[];
  promptHint: string;
}

export interface DreamDictionaryMessages {
  title: string;
  description: string;
  features: string;
  about: string[];
  promptHint: string;
}

export interface Messages {
  metadata: {
    title: string;
    description: string;
  };
  nav: {
    home: string;
    tarot: string;
    dreams: string;
    history: string;
  };
  history: {
    title: string;
    empty: string;
    emptyHint: string;
    tarotReading: string;
    dreamReading: string;
    question: string;
    dreamDescription: string;
    cards: string;
    delete: string;
    showDetails: string;
    hideDetails: string;
    clearAll: string;
  };
  home: {
    title: string;
    subtitle: string;
    heroAlt: string;
    tarotTitle: string;
    tarotDescription: string;
    tarotImageAlt: string;
    tarotButton: string;
    dreamsTitle: string;
    dreamsDescription: string;
    dreamsImageAlt: string;
    dreamsButton: string;
  };
  tarot: {
    spreadsTitle: string;
    start: string;
  };
  dreams: {
    dictionariesTitle: string;
    dictionariesIntro: string;
    interpret: string;
    dictionaryPageTitle: string;
    interpretDream: string;
    oracleReading: string;
    newInterpretation: string;
    chooseAnother: string;
  };
  reading: {
    questionIntro: string;
    questionLabel: string;
    dreamIntro: string;
    dreamLabel: string;
    oracleReading: string;
    newSpread: string;
    interpretation: string;
    reversed: string;
    upright: string;
    cardBack: string;
    deckAriaLabel: string;
    deckHint: string;
    deckHintOne: string;
    deckHintFew: string;
    deckHintMany: string;
    positionFallback: string;
    genericError: string;
    apiError: string;
    placeholder: string;
    underDevelopment: string;
  };
  share: {
    share: string;
    sharing: string;
    copy: string;
    copied: string;
    error: string;
    tarotFallbackTitle: string;
    dreamFallbackTitle: string;
  };
  footer: {
    contact: string;
    disclaimer: string;
    copyright: string;
  };
  notFound: {
    title: string;
    description: string;
    backHome: string;
  };
  spreads: Record<SpreadId, SpreadMessages>;
  dreamDictionaries: Record<DreamDictionaryId, DreamDictionaryMessages>;
  cards: {
    names: Record<string, string>;
    suits: {
      wands: string;
      cups: string;
      swords: string;
      pentacles: string;
    };
    ranks: {
      ace: string;
      '2': string;
      '3': string;
      '4': string;
      '5': string;
      '6': string;
      '7': string;
      '8': string;
      '9': string;
      '10': string;
      page: string;
      knight: string;
      queen: string;
      king: string;
    };
  };
}
