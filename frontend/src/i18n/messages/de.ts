import type { Messages } from './types';
import { spreadMessages } from './content/spreads.de';
import { dreamDictionaryMessages } from './content/dreams.de';
import { cardNames, ranks, suits } from './content/cards.de';

const de: Messages = {
  metadata: {
    title: 'Ihr Persönliches Orakel',
    description: 'Tarotkarten legen online kostenlos und Traumdeutung',
  },
  nav: {
    home: 'Startseite',
    tarot: 'Tarot',
    dreams: 'Träume',
    history: 'Verlauf',
    language: 'Sprache',
    menuOpen: 'Menü öffnen',
    menuClose: 'Menü schließen',
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
      'Tarotkarten legen online kostenlos und Träume deuten. Wählen Sie eine Legung, ziehen Sie die Karten oder nutzen Sie das Traumlexikon — persönliche Deutung in wenigen Klicks.',
    heroAlt: 'Mystisches Orakel',
    tarotTitle: 'Tarot',
    tarotDescription:
      'Tarotkarten legen online kostenlos. Wählen Sie eine Legung — Keltisches Kreuz, Drei Karten, Ja/Nein, Tageskarte — stellen Sie Ihre Frage und erhalten Sie eine persönliche Deutung.',
    tarotImageAlt: 'Tarot-Legung',
    tarotButton: 'Zum Tarot',
    dreamsTitle: 'Träume',
    dreamsDescription:
      'Kostenlose Traumdeutung online. Öffnen Sie ein Traumlexikon — Freud, Jung, Miller und andere — und erfahren Sie, was Ihre Traumsymbole bedeuten.',
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
      'Wählen Sie ein Traumlexikon und deuten Sie Ihren Traum online. Freud, Jung, Miller, Wanga und andere Traditionen lesen Symbole auf je eigene Weise.',
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
    networkError: 'Keine Internetverbindung. Prüfen Sie das Netz und versuchen Sie es erneut.',
    placeholder: 'Seite in Entwicklung',
    underDevelopment: 'Seite in Entwicklung',
  },
  share: {
    share: 'Teilen',
    sharing: 'Link wird erstellt...',
    copy: 'Kopieren',
    copied: 'Link kopiert',
    error: 'Teilen fehlgeschlagen',
    networkError: 'Keine Verbindung',
    tarotFallbackTitle: 'Tarot-Legung',
    dreamFallbackTitle: 'Traumdeutung',
  },
  footer: {
    contact: 'Entwickler kontaktieren',
    disclaimer: 'Nur zu Unterhaltungszwecken. Kein Ersatz für professionelle Beratung.',
    copyright: '© {year} Ihr Persönliches Orakel',
  },
  cookieConsent: {
    message:
      'Wir verwenden Cookies und ähnliche Technologien für Analyse und Fehlerüberwachung, um die Website zu verbessern. Mit dem Fortfahren stimmen Sie dem zu.',
    accept: 'OK',
  },
  notFound: {
    title: 'Seite nicht gefunden',
    description: 'Die gesuchte Seite existiert nicht oder wurde verschoben.',
    backHome: 'Zur Startseite',
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
