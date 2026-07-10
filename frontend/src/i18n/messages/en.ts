import type { Messages } from './types';
import { spreadMessages } from './content/spreads.en';
import { dreamDictionaryMessages } from './content/dreams.en';
import { cardNames, ranks, suits } from './content/cards.en';

const en: Messages = {
  metadata: {
    title: 'Your Personal Oracle',
    description: 'Tarot card readings and dream interpretation',
  },
  nav: {
    home: 'Home',
    tarot: 'Tarot',
    dreams: 'Dreams',
    history: 'History',
  },
  history: {
    title: 'Your readings',
    empty: 'No readings yet',
    emptyHint: 'Tarot spreads and dream interpretations you complete will appear here.',
    tarotReading: 'Tarot reading',
    dreamReading: 'Dream interpretation',
    question: 'Question',
    dreamDescription: 'Dream description',
    cards: 'Cards',
    delete: 'Delete',
    showDetails: 'Show details',
    hideDetails: 'Hide details',
    clearAll: 'Clear all',
  },
  home: {
    title: 'Your Personal Oracle',
    subtitle:
      'Unlock the mysteries of fate through the ancient art of Tarot and the wisdom of dreams. Personal readings await you.',
    heroAlt: 'Mystical oracle',
    tarotTitle: 'Tarot',
    tarotDescription:
      'The ancient art of card divination. Choose a spread, ask your question, and receive a personal reading from the oracle.',
    tarotImageAlt: 'Tarot spread',
    tarotButton: 'Go to Tarot',
    dreamsTitle: 'Dreams',
    dreamsDescription:
      'Decode the messages of your subconscious. Discover the meaning of symbols and images that come to you in sleep.',
    dreamsImageAlt: 'Dream dictionary — dream interpretation',
    dreamsButton: 'Go to Dreams',
  },
  tarot: {
    spreadsTitle: 'Spreads',
    start: 'Start',
  },
  dreams: {
    dictionariesTitle: 'Dream Dictionaries',
    dictionariesIntro:
      'Choose the dream dictionary whose symbolism best fits your question. Each tradition reads dream images in its own way.',
    interpret: 'Interpret',
    dictionaryPageTitle: '{title} Dream Dictionary',
    interpretDream: 'Interpret dream',
    oracleReading: 'The dream dictionary reads the signs...',
    newInterpretation: 'New interpretation',
    chooseAnother: 'Choose another dictionary',
  },
  reading: {
    questionIntro:
      'Relax, take a few deep breaths, and formulate your question. Write it in the field below — the clearer the question, the more precise the cards\' answer.',
    questionLabel: 'Your question',
    dreamIntro:
      'Describe your dream in as much detail as possible. The more details — images, emotions, places, and people — the deeper the interpretation.',
    dreamLabel: 'Dream description',
    oracleReading: 'The oracle reads the signs...',
    newSpread: 'New spread',
    interpretation: 'Interpretation',
    reversed: 'Reversed',
    upright: 'Upright',
    cardBack: 'Card back',
    deckAriaLabel: 'Tarot deck',
    deckHint: 'Tap the deck to draw {count, plural, one {# card} other {# cards}}',
    deckHintOne: 'card',
    deckHintFew: 'cards',
    deckHintMany: 'cards',
    positionFallback: 'Position {number}',
    genericError: 'An error occurred',
    apiError: 'Could not get an interpretation. Please try again later.',
    placeholder: 'Page under development',
    underDevelopment: 'Page under development',
  },
  share: {
    share: 'Share',
    sharing: 'Creating link...',
    copy: 'Copy',
    copied: 'Link copied',
    error: 'Could not share',
    tarotFallbackTitle: 'Tarot reading',
    dreamFallbackTitle: 'Dream interpretation',
  },
  footer: {
    contact: 'Contact',
    disclaimer: 'For entertainment purposes only. Not a substitute for professional advice.',
    copyright: '© {year} Your Personal Oracle',
  },
  notFound: {
    title: 'Page not found',
    description: 'The page you are looking for does not exist or has been moved.',
    backHome: 'Back to home',
  },
  spreads: spreadMessages as Messages['spreads'],
  dreamDictionaries: dreamDictionaryMessages as Messages['dreamDictionaries'],
  cards: {
    names: cardNames,
    suits,
    ranks,
  },
};

export default en;
