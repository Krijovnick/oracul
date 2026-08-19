import type { Messages } from './types';
import { spreadMessages } from './content/spreads.pt';
import { dreamDictionaryMessages } from './content/dreams.pt';
import { cardNames, ranks, suits } from './content/cards.pt';

const pt: Messages = {
  metadata: {
    title: 'O Seu Oráculo Pessoal',
    description: 'Tarot online grátis e interpretação de sonhos',
  },
  nav: {
    home: 'Início',
    tarot: 'Tarot',
    dreams: 'Sonhos',
    history: 'Histórico',
    language: 'Idioma',
    menuOpen: 'Abrir menu',
    menuClose: 'Fechar menu',
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
      'Tarot online grátis e interpretação de sonhos. Escolha uma tiragem, tire as cartas ou decifre um sonho — orientação pessoal em poucos cliques.',
    heroAlt: 'Oráculo místico',
    tarotTitle: 'Tarot',
    tarotDescription:
      'Tarot online grátis. Escolha uma tiragem — cruz celta, três cartas, sim ou não, carta do dia — faça a sua pergunta e receba uma leitura pessoal.',
    tarotImageAlt: 'Tiragem de Tarot',
    tarotButton: 'Ir para o Tarot',
    dreamsTitle: 'Sonhos',
    dreamsDescription:
      'Interpretação de sonhos grátis online. Abra um dicionário de sonhos — Freud, Jung, Miller e outros — e descubra o significado dos símbolos do seu sonho.',
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
      'Escolha um dicionário de sonhos e interprete o seu sonho online. Freud, Jung, Miller, Vanga e outras tradições leem os símbolos cada uma à sua maneira.',
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
    networkError: 'Sem ligação à Internet. Verifique a rede e tente novamente.',
    placeholder: 'Página em desenvolvimento',
    underDevelopment: 'Página em desenvolvimento',
  },
  share: {
    share: 'Compartilhar',
    sharing: 'Criando link...',
    copy: 'Copiar',
    copied: 'Link copiado',
    error: 'Não foi possível compartilhar',
    networkError: 'Sem ligação',
    tarotFallbackTitle: 'Tiragem de Tarot',
    dreamFallbackTitle: 'Interpretação de sonho',
  },
  footer: {
    contact: 'Contactar os desenvolvedores',
    disclaimer: 'Apenas para fins de entretenimento. Não substitui aconselhamento profissional.',
    copyright: '© {year} O Seu Oráculo Pessoal',
  },
  cookieConsent: {
    message:
      'Usamos cookies e tecnologias semelhantes para análise e monitorização de erros, a fim de melhorar o site. Ao continuar, concorda com isto.',
    accept: 'OK',
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
