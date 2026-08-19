import type { Messages } from './types';
import { spreadMessages } from './content/spreads.fr';
import { dreamDictionaryMessages } from './content/dreams.fr';
import { cardNames, ranks, suits } from './content/cards.fr';

const fr: Messages = {
  metadata: {
    title: 'Votre Oracle Personnel',
    description: 'Tirage de tarot gratuit en ligne et interprétation des rêves',
  },
  nav: {
    home: 'Accueil',
    tarot: 'Tarot',
    dreams: 'Rêves',
    history: 'Historique',
    language: 'Langue',
    menuOpen: 'Ouvrir le menu',
    menuClose: 'Fermer le menu',
  },
  history: {
    title: 'Vos lectures',
    empty: 'Aucune lecture pour le moment',
    emptyHint: 'Vos tirages de Tarot et interprétations de rêves apparaîtront ici.',
    tarotReading: 'Tirage de Tarot',
    dreamReading: 'Interprétation de rêve',
    question: 'Question',
    dreamDescription: 'Description du rêve',
    cards: 'Cartes',
    delete: 'Supprimer',
    showDetails: 'Voir les détails',
    hideDetails: 'Masquer',
    clearAll: 'Tout effacer',
  },
  home: {
    title: 'Votre Oracle Personnel',
    subtitle:
      'Tirage de tarot gratuit en ligne et interprétation des rêves. Choisissez un tirage, piochez les cartes ou décodez un rêve — une guidance personnelle en quelques clics.',
    heroAlt: 'Oracle mystique',
    tarotTitle: 'Tarot',
    tarotDescription:
      'Tirage de tarot gratuit en ligne. Choisissez un tirage — croix celtique, trois cartes, oui ou non, carte du jour — posez votre question et recevez une interprétation personnelle.',
    tarotImageAlt: 'Tirage de Tarot',
    tarotButton: 'Aller au Tarot',
    dreamsTitle: 'Rêves',
    dreamsDescription:
      'Interprétation des rêves gratuite en ligne. Ouvrez un dictionnaire des rêves — Freud, Jung, Miller et d\'autres — et découvrez ce que signifient vos symboles oniriques.',
    dreamsImageAlt: 'Dictionnaire des rêves — interprétation',
    dreamsButton: 'Aller aux Rêves',
  },
  tarot: {
    spreadsTitle: 'Tirages',
    start: 'Commencer',
  },
  dreams: {
    dictionariesTitle: 'Dictionnaires des rêves',
    dictionariesIntro:
      'Choisissez un dictionnaire des rêves et interprétez votre rêve en ligne. Freud, Jung, Miller, Vanga et d\'autres traditions lisent les symboles chacun à leur manière.',
    interpret: 'Interpréter',
    dictionaryPageTitle: 'Dictionnaire des rêves {title}',
    interpretDream: 'Interpréter le rêve',
    oracleReading: 'Le dictionnaire lit les signes...',
    newInterpretation: 'Nouvelle interprétation',
    chooseAnother: 'Choisir un autre dictionnaire',
  },
  reading: {
    questionIntro:
      'Détendez-vous, prenez quelques respirations profondes et formulez votre question. Écrivez-la dans le champ ci-dessous — plus la question est claire, plus la réponse des cartes sera précise.',
    questionLabel: 'Votre question',
    dreamIntro:
      'Décrivez votre rêve le plus en détail possible. Plus il y a de détails — images, émotions, lieux et personnes — plus l\'interprétation sera profonde.',
    dreamLabel: 'Description du rêve',
    oracleReading: 'L\'oracle lit les signes...',
    newSpread: 'Nouveau tirage',
    interpretation: 'Interprétation',
    reversed: 'Renversée',
    upright: 'À l\'endroit',
    cardBack: 'Dos de carte',
    deckAriaLabel: 'Jeu de Tarot',
    deckHint: 'Appuyez sur le jeu pour tirer {count, plural, one {# carte} other {# cartes}}',
    deckHintOne: 'carte',
    deckHintFew: 'cartes',
    deckHintMany: 'cartes',
    positionFallback: 'Position {number}',
    genericError: 'Une erreur s\'est produite',
    apiError: 'Impossible d\'obtenir une interprétation. Veuillez réessayer plus tard.',
    networkError: 'Pas de connexion Internet. Vérifiez le réseau et réessayez.',
    placeholder: 'Page en cours de développement',
    underDevelopment: 'Page en cours de développement',
  },
  share: {
    share: 'Partager',
    sharing: 'Création du lien...',
    copy: 'Copier',
    copied: 'Lien copié',
    error: 'Impossible de partager',
    networkError: 'Pas de connexion',
    tarotFallbackTitle: 'Tirage de Tarot',
    dreamFallbackTitle: 'Interprétation de rêve',
  },
  footer: {
    contact: 'Contacter les développeurs',
    disclaimer: 'À titre de divertissement uniquement. Ne remplace pas un avis professionnel.',
    copyright: '© {year} Votre Oracle Personnel',
  },
  cookieConsent: {
    message:
      'Nous utilisons des cookies et des technologies similaires pour l’analyse et le suivi des erreurs afin d’améliorer le site. En continuant, vous acceptez cela.',
    accept: 'OK',
  },
  notFound: {
    title: 'Page introuvable',
    description: 'La page que vous recherchez n\'existe pas ou a été déplacée.',
    backHome: 'Retour à l\'accueil',
  },
  spreads: spreadMessages as Messages['spreads'],
  dreamDictionaries: dreamDictionaryMessages as Messages['dreamDictionaries'],
  cards: {
    names: cardNames,
    suits,
    ranks,
  },
};

export default fr;
