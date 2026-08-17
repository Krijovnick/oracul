import type { Messages } from './types';
import { spreadMessages } from './content/spreads.es';
import { dreamDictionaryMessages } from './content/dreams.es';
import { cardNames, ranks, suits } from './content/cards.es';

const es: Messages = {
  metadata: {
    title: 'Tu Oráculo Personal',
    description: 'Tirada de tarot gratis online e interpretación de sueños',
  },
  nav: {
    home: 'Inicio',
    tarot: 'Tarot',
    dreams: 'Sueños',
    history: 'Historial',
    language: 'Idioma',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
  },
  history: {
    title: 'Tus lecturas',
    empty: 'Aún no hay lecturas',
    emptyHint: 'Aquí aparecerán tus tiradas de Tarot e interpretaciones de sueños.',
    tarotReading: 'Tirada de Tarot',
    dreamReading: 'Interpretación de sueño',
    question: 'Pregunta',
    dreamDescription: 'Descripción del sueño',
    cards: 'Cartas',
    delete: 'Eliminar',
    showDetails: 'Ver detalles',
    hideDetails: 'Ocultar',
    clearAll: 'Borrar todo',
  },
  home: {
    title: 'Tu Oráculo Personal',
    subtitle:
      'Tirada de tarot gratis online e interpretación de sueños. Elige una tirada, saca las cartas o descifra un sueño — orientación personal en unos clics.',
    heroAlt: 'Oráculo místico',
    tarotTitle: 'Tarot',
    tarotDescription:
      'Tirada de tarot gratis online. Elige una tirada — cruz celta, tres cartas, sí o no, carta del día — formula tu pregunta y recibe una lectura personal.',
    tarotImageAlt: 'Tirada de Tarot',
    tarotButton: 'Ir al Tarot',
    dreamsTitle: 'Sueños',
    dreamsDescription:
      'Interpretación de sueños gratis online. Abre un diccionario de sueños — Freud, Jung, Miller y otros — y descubre qué significan los símbolos de tu sueño.',
    dreamsImageAlt: 'Diccionario de sueños — interpretación',
    dreamsButton: 'Ir a Sueños',
  },
  tarot: {
    spreadsTitle: 'Tiradas',
    start: 'Comenzar',
  },
  dreams: {
    dictionariesTitle: 'Diccionarios de sueños',
    dictionariesIntro:
      'Elige un diccionario de sueños e interpreta tu sueño online. Freud, Jung, Miller, Vanga y otras tradiciones leen los símbolos cada una a su manera.',
    interpret: 'Interpretar',
    dictionaryPageTitle: 'Diccionario de sueños {title}',
    interpretDream: 'Interpretar sueño',
    oracleReading: 'El diccionario lee las señales...',
    newInterpretation: 'Nueva interpretación',
    chooseAnother: 'Elegir otro diccionario',
  },
  reading: {
    questionIntro:
      'Relájate, respira profundamente varias veces y formula tu pregunta. Escríbela en el campo de abajo — cuanto más clara sea la pregunta, más precisa será la respuesta de las cartas.',
    questionLabel: 'Tu pregunta',
    dreamIntro:
      'Describe tu sueño con el mayor detalle posible. Cuantos más detalles — imágenes, emociones, lugares y personas — más profunda será la interpretación.',
    dreamLabel: 'Descripción del sueño',
    oracleReading: 'El oráculo lee las señales...',
    newSpread: 'Nueva tirada',
    interpretation: 'Interpretación',
    reversed: 'Invertida',
    upright: 'Derecha',
    cardBack: 'Reverso de la carta',
    deckAriaLabel: 'Baraja de Tarot',
    deckHint: 'Toca la baraja para sacar {count, plural, one {# carta} other {# cartas}}',
    deckHintOne: 'carta',
    deckHintFew: 'cartas',
    deckHintMany: 'cartas',
    positionFallback: 'Posición {number}',
    genericError: 'Se produjo un error',
    apiError: 'No se pudo obtener la interpretación. Inténtalo de nuevo más tarde.',
    placeholder: 'Página en desarrollo',
    underDevelopment: 'Página en desarrollo',
  },
  share: {
    share: 'Compartir',
    sharing: 'Creando enlace...',
    copy: 'Copiar',
    copied: 'Enlace copiado',
    error: 'No se pudo compartir',
    tarotFallbackTitle: 'Tirada de Tarot',
    dreamFallbackTitle: 'Interpretación de sueño',
  },
  footer: {
    contact: 'Contactar a los desarrolladores',
    disclaimer: 'Solo con fines de entretenimiento. No sustituye el asesoramiento profesional.',
    copyright: '© {year} Tu Oráculo Personal',
  },
  cookieConsent: {
    message:
      'Usamos cookies y tecnologías similares para analítica y monitoreo de errores, y así mejorar el sitio. Al continuar, aceptas esto.',
    accept: 'OK',
  },
  notFound: {
    title: 'Página no encontrada',
    description: 'La página que buscas no existe o ha sido movida.',
    backHome: 'Volver al inicio',
  },
  spreads: spreadMessages as Messages['spreads'],
  dreamDictionaries: dreamDictionaryMessages as Messages['dreamDictionaries'],
  cards: {
    names: cardNames,
    suits,
    ranks,
  },
};

export default es;
