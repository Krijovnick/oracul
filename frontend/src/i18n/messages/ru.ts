import type { Messages } from './types';
import { spreadMessages } from './content/spreads.ru';
import { dreamDictionaryMessages } from './content/dreams.ru';
import { cardNames, ranks, suits } from './content/cards.ru';

const ru: Messages = {
  metadata: {
    title: 'Твой Личный Оракул',
    description: 'Гадание на картах Таро и расшифровка снов',
  },
  nav: {
    home: 'Главная',
    tarot: 'Таро',
    dreams: 'Сонник',
    history: 'История',
  },
  history: {
    title: 'Ваши толкования',
    empty: 'Пока нет сохранённых толкований',
    emptyHint: 'Здесь появятся расклады Таро и толкования снов, которые вы получите.',
    tarotReading: 'Расклад Таро',
    dreamReading: 'Толкование сна',
    question: 'Вопрос',
    dreamDescription: 'Описание сна',
    cards: 'Карты',
    delete: 'Удалить',
    showDetails: 'Подробнее',
    hideDetails: 'Скрыть',
    clearAll: 'Очистить всё',
  },
  home: {
    title: 'Твой Личный Оракул',
    subtitle:
      'Откройте тайны судьбы через древнее искусство Таро и мудрость снов. Персональные предсказания ждут вас.',
    heroAlt: 'Мистический оракул',
    tarotTitle: 'Таро',
    tarotDescription:
      'Древнее искусство гадания на картах. Выберите расклад, задайте вопрос и получите персональное толкование от оракула.',
    tarotImageAlt: 'Расклад Таро',
    tarotButton: 'Перейти в Таро',
    dreamsTitle: 'Сонник',
    dreamsDescription:
      'Расшифруйте послания подсознания. Узнайте значение символов и образов, которые приходят к вам во сне.',
    dreamsImageAlt: 'Сонник — толкование снов',
    dreamsButton: 'Перейти в Сонник',
  },
  tarot: {
    spreadsTitle: 'Расклады',
    start: 'Начать',
  },
  dreams: {
    dictionariesTitle: 'Сонники',
    dictionariesIntro:
      'Выберите сонник, чья символика ближе вашему вопросу. Каждая традиция по-своему читает образы сновидений.',
    interpret: 'Толковать',
    dictionaryPageTitle: 'Сонник {title}',
    interpretDream: 'Толковать сон',
    oracleReading: 'Сонник читает знаки...',
    newInterpretation: 'Новое толкование',
    chooseAnother: 'Выбрать другой сонник',
  },
  reading: {
    questionIntro:
      'Расслабьтесь, сделайте несколько глубоких вдохов и сформулируйте свой вопрос. Запишите его в поле ниже — чем яснее вопрос, тем точнее ответ карт.',
    questionLabel: 'Ваш вопрос',
    dreamIntro:
      'Опишите свой сон как можно подробнее. Чем больше деталей — образов, эмоций, мест и людей — тем глубже будет толкование.',
    dreamLabel: 'Описание сна',
    oracleReading: 'Оракул читает знаки...',
    newSpread: 'Новый расклад',
    interpretation: 'Толкование',
    reversed: 'Перевёрнутая',
    upright: 'Прямая',
    cardBack: 'Рубашка карты',
    deckAriaLabel: 'Колода Таро',
    deckHint: 'Нажмите на колоду, чтобы вытянуть {count, plural, one {# карту} few {# карты} many {# карт} other {# карт}}',
    deckHintOne: 'карту',
    deckHintFew: 'карты',
    deckHintMany: 'карт',
    positionFallback: 'Позиция {number}',
    genericError: 'Произошла ошибка',
    apiError: 'Не удалось получить толкование. Попробуйте позже.',
    placeholder: 'Страница в разработке',
    underDevelopment: 'Страница в разработке',
  },
  share: {
    share: 'Поделиться',
    sharing: 'Создаём ссылку...',
    copy: 'Копировать',
    copied: 'Ссылка скопирована',
    error: 'Не удалось поделиться',
    tarotFallbackTitle: 'Расклад Таро',
    dreamFallbackTitle: 'Толкование сна',
  },
  spreads: spreadMessages as Messages['spreads'],
  dreamDictionaries: dreamDictionaryMessages as Messages['dreamDictionaries'],
  cards: {
    names: cardNames,
    suits,
    ranks,
  },
};

export default ru;
