import type { Messages } from './types';
import { spreadMessages } from './content/spreads.pt';
import { dreamDictionaryMessages } from './content/dreams.pt';
import { cardNames, ranks, suits } from './content/cards.pt';

const pt: Messages = {
  metadata: {
    title: 'O Seu Oráculo Pessoal',
    description: 'Leituras de cartas de Tarot e interpretação de sonhos',
  },
  nav: {
    home: 'Início',
    tarot: 'Tarot',
    dreams: 'Sonhos',
    history: 'Histórico',
  },
  history: {
    title: 'As suas leituras',
    empty: 'Ainda não há leituras',
    emptyHint: 'As suas tiragens de Tarot e interpretações de sonhos aparecerão aqui.',
    tarotReading: 'Tiragem de Tarot',
    dreamReading: 'Interpretação de sonho',
    question: 'Pergunta',
    dreamDescription: 'Descrição do sonho',
    cards: 'Cartas',
    delete: 'Eliminar',
    showDetails: 'Ver detalhes',
    hideDetails: 'Ocultar',
    clearAll: 'Limpar tudo',
  },
  home: {
    title: 'O Seu Oráculo Pessoal',
    subtitle:
      'Descubra os mistérios do destino através da arte antiga do Tarot e da sabedoria dos sonhos. Leituras personalizadas esperam por si.',
    heroAlt: 'Oráculo místico',
    tarotTitle: 'Tarot',
    tarotDescription:
      'A arte antiga da adivinhação com cartas. Escolha uma tiragem, faça a sua pergunta e receba uma interpretação pessoal do oráculo.',
    tarotImageAlt: 'Tiragem de Tarot',
    tarotButton: 'Ir para o Tarot',
    dreamsTitle: 'Sonhos',
    dreamsDescription:
      'Decifre as mensagens do seu subconsciente. Descubra o significado dos símbolos e imagens que lhe visitam no sono.',
    dreamsImageAlt: 'Dicionário de sonhos — interpretação',
    dreamsButton: 'Ir para Sonhos',
  },
  tarot: {
    spreadsTitle: 'Tiragens',
    start: 'Começar',
  },
  dreams: {
    dictionariesTitle: 'Dicionários de sonhos',
    dictionariesIntro:
      'Escolha o dicionário cuja simbologia melhor se adequa à sua pergunta. Cada tradição lê as imagens oníricas à sua maneira.',
    interpret: 'Interpretar',
    dictionaryPageTitle: 'Dicionário de sonhos {title}',
    interpretDream: 'Interpretar sonho',
    oracleReading: 'O dicionário lê os sinais...',
    newInterpretation: 'Nova interpretação',
    chooseAnother: 'Escolher outro dicionário',
  },
  reading: {
    questionIntro:
      'Relaxe, respire profundamente algumas vezes e formule a sua pergunta. Escreva-a no campo abaixo — quanto mais clara for a pergunta, mais precisa será a resposta das cartas.',
    questionLabel: 'A sua pergunta',
    dreamIntro:
      'Descreva o seu sonho com o máximo de detalhe possível. Quanto mais detalhes — imagens, emoções, lugares e pessoas — mais profunda será a interpretação.',
    dreamLabel: 'Descrição do sonho',
    oracleReading: 'O oráculo lê os sinais...',
    newSpread: 'Nova tiragem',
    interpretation: 'Interpretação',
    reversed: 'Invertida',
    upright: 'Normal',
    cardBack: 'Verso da carta',
    deckAriaLabel: 'Baralho de Tarot',
    deckHint: 'Toque no baralho para retirar {count, plural, one {# carta} other {# cartas}}',
    deckHintOne: 'carta',
    deckHintFew: 'cartas',
    deckHintMany: 'cartas',
    positionFallback: 'Posição {number}',
    genericError: 'Ocorreu um erro',
    apiError: 'Não foi possível obter a interpretação. Tente novamente mais tarde.',
    placeholder: 'Página em desenvolvimento',
    underDevelopment: 'Página em desenvolvimento',
  },
  share: {
    share: 'Compartilhar',
    sharing: 'Criando link...',
    copy: 'Copiar',
    copied: 'Link copiado',
    error: 'Não foi possível compartilhar',
    tarotFallbackTitle: 'Tiragem de Tarot',
    dreamFallbackTitle: 'Interpretação de sonho',
  },
  footer: {
    contact: 'Contactar os desenvolvedores',
    disclaimer: 'Apenas para fins de entretenimento. Não substitui aconselhamento profissional.',
    copyright: '© {year} O Seu Oráculo Pessoal',
  },
  notFound: {
    title: 'Página não encontrada',
    description: 'A página que procura não existe ou foi movida.',
    backHome: 'Voltar ao início',
  },
  spreads: spreadMessages as Messages['spreads'],
  dreamDictionaries: dreamDictionaryMessages as Messages['dreamDictionaries'],
  cards: {
    names: cardNames,
    suits,
    ranks,
  },
};

export default pt;
