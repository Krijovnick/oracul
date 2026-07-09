import type { TarotCard } from './types';
import type { Messages } from '@/i18n/messages/types';

const TAROT_IMAGE_BASE = '/images/tarot';

function card(id: string, fileName: string): TarotCard {
  return { id, imageSrc: `${TAROT_IMAGE_BASE}/${fileName}` };
}

const majorArcana: TarotCard[] = [
  card('fool', 'fool.png'),
  card('magician', 'magician.png'),
  card('high-priestess', 'nigh priestess.png'),
  card('empress', 'empress.png'),
  card('emperor', 'emperor.png'),
  card('hierophant', 'hierophant.png'),
  card('lovers', 'lovers.png'),
  card('chariot', 'chariot.png'),
  card('strength', 'strength.png'),
  card('hermit', 'hermit.png'),
  card('wheel-of-fortune', 'wheel fortune.png'),
  card('justice', 'justice.png'),
  card('hanged-man', 'hanged man.png'),
  card('death', 'death.png'),
  card('temperance', 'temperance.png'),
  card('devil', 'devil.png'),
  card('tower', 'tower.png'),
  card('star', 'star.png'),
  card('moon', 'moon.png'),
  card('sun', 'sun.png'),
  card('judgement', 'judgement.png'),
  card('world', 'world.png'),
];

const fileNameOverrides: Record<string, string> = {
  'queen-swords': 'queen swirds.png',
  'queen-wands': 'qween wands.png',
};

const ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'page', 'knight', 'queen', 'king'] as const;
const suits = ['wands', 'cups', 'swords', 'pentacles'] as const;

const minorArcana: TarotCard[] = suits.flatMap((suit) =>
  ranks.map((rank) => {
    const id = `${rank}-${suit}`;
    const fileName = fileNameOverrides[id] ?? `${rank} ${suit}.png`;
    return card(id, fileName);
  }),
);

export const tarotDeck: TarotCard[] = [...majorArcana, ...minorArcana];

export function getCardName(cardItem: TarotCard, messages: Messages): string {
  const majorName = messages.cards.names[cardItem.id];
  if (majorName) return majorName;

  const [rank, suit] = cardItem.id.split('-') as [keyof Messages['cards']['ranks'], keyof Messages['cards']['suits']];
  if (!rank || !suit) return cardItem.id;

  return `${messages.cards.ranks[rank]} ${messages.cards.suits[suit]}`;
}

export function getLocalizedDeck(messages: Messages): Array<TarotCard & { name: string }> {
  return tarotDeck.map((cardItem) => ({
    ...cardItem,
    name: getCardName(cardItem, messages),
  }));
}
