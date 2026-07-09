import type { Messages } from './types';
import { spreadMessages } from './content/spreads.de';
import { dreamDictionaryMessages } from './content/dreams.de';
import { cardNames, ranks, suits } from './content/cards.de';

const de: Messages = {
  metadata: {
    title: 'Ihr Persönliches Orakel',
    description: 'Tarotkarten-Legungen und Traumdeutung',
  },
  nav: {
    home: 'Startseite',
    tarot: 'Tarot',
    dreams: 'Träume',
    history: 'Verlauf',
  },
  history: {
    title: 'Ihre Deutungen',
    empty: 'Noch keine Deutungen',
    emptyHint: 'Tarot-Legungen und Traumdeutungen erscheinen hier nach Abschluss.',
    tarotReading: 'Tarot-Legung',
    dreamReading: 'Traumdeutung',
    question: 'Frage',
    dreamDescription: 'Traumbeschreibung',
    cards: 'Karten',
    delete: 'Löschen',
    showDetails: 'Details anzeigen',
    hideDetails: 'Ausblenden',
    clearAll: 'Alles löschen',
  },
  home: {
    title: 'Ihr Persönliches Orakel',
    subtitle:
      'Entdecken Sie die Geheimnisse des Schicksals durch die alte Kunst des Tarot und die Weisheit der Träume. Persönliche Deutungen erwarten Sie.',
    heroAlt: 'Mystisches Orakel',
    tarotTitle: 'Tarot',
    tarotDescription:
      'Die alte Kunst der Kartenwahrsagung. Wählen Sie eine Legung, stellen Sie Ihre Frage und erhalten Sie eine persönliche Deutung vom Orakel.',
    tarotImageAlt: 'Tarot-Legung',
    tarotButton: 'Zum Tarot',
    dreamsTitle: 'Träume',
    dreamsDescription:
      'Entschlüsseln Sie die Botschaften Ihres Unterbewusstseins. Erfahren Sie die Bedeutung von Symbolen und Bildern, die Ihnen im Schlaf erscheinen.',
    dreamsImageAlt: 'Traumlexikon — Traumdeutung',
    dreamsButton: 'Zu den Träumen',
  },
  tarot: {
    spreadsTitle: 'Legungen',
    start: 'Beginnen',
  },
  dreams: {
    dictionariesTitle: 'Traumlexika',
    dictionariesIntro:
      'Wählen Sie das Traumlexikon, dessen Symbolik am besten zu Ihrer Frage passt. Jede Tradition liest Traumbilder auf ihre Weise.',
    interpret: 'Deuten',
    dictionaryPageTitle: 'Traumlexikon {title}',
    interpretDream: 'Traum deuten',
    oracleReading: 'Das Traumlexikon liest die Zeichen...',
    newInterpretation: 'Neue Deutung',
    chooseAnother: 'Anderes Lexikon wählen',
  },
  reading: {
    questionIntro:
      'Entspannen Sie sich, atmen Sie einige Male tief durch und formulieren Sie Ihre Frage. Schreiben Sie sie in das Feld unten — je klarer die Frage, desto präziser die Antwort der Karten.',
    questionLabel: 'Ihre Frage',
    dreamIntro:
      'Beschreiben Sie Ihren Traum so ausführlich wie möglich. Je mehr Details — Bilder, Emotionen, Orte und Menschen — desto tiefer die Deutung.',
    dreamLabel: 'Traumbeschreibung',
    oracleReading: 'Das Orakel liest die Zeichen...',
    newSpread: 'Neue Legung',
    interpretation: 'Deutung',
    reversed: 'Umgekehrt',
    upright: 'Aufrecht',
    cardBack: 'Kartenrückseite',
    deckAriaLabel: 'Tarotdeck',
    deckHint: 'Tippen Sie auf das Deck, um {count, plural, one {# Karte} other {# Karten}} zu ziehen',
    deckHintOne: 'Karte',
    deckHintFew: 'Karten',
    deckHintMany: 'Karten',
    positionFallback: 'Position {number}',
    genericError: 'Ein Fehler ist aufgetreten',
    apiError: 'Deutung konnte nicht abgerufen werden. Bitte versuchen Sie es später erneut.',
    placeholder: 'Seite in Entwicklung',
    underDevelopment: 'Seite in Entwicklung',
  },
  share: {
    share: 'Teilen',
    sharing: 'Link wird erstellt...',
    copy: 'Kopieren',
    copied: 'Link kopiert',
    error: 'Teilen fehlgeschlagen',
    tarotFallbackTitle: 'Tarot-Legung',
    dreamFallbackTitle: 'Traumdeutung',
  },
  footer: {
    contact: 'Entwickler kontaktieren',
    disclaimer: 'Nur zu Unterhaltungszwecken. Kein Ersatz für professionelle Beratung.',
    copyright: '© {year} Ihr Persönliches Orakel',
  },
  spreads: spreadMessages as Messages['spreads'],
  dreamDictionaries: dreamDictionaryMessages as Messages['dreamDictionaries'],
  cards: {
    names: cardNames,
    suits,
    ranks,
  },
};

export default de;
