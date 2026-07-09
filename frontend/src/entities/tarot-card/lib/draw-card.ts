import { getCardName, tarotDeck } from '../model/deck';
import type { Messages } from '@/i18n/messages/types';
import type { DrawnCard } from '../model/types';

function shuffleDeck(): number[] {
  const indices = tarotDeck.map((_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  return indices;
}

function localizeCard(cardIndex: number, messages: Messages): DrawnCard {
  const card = tarotDeck[cardIndex];
  return {
    card: {
      ...card,
      name: getCardName(card, messages),
    },
    reversed: Math.random() < 0.5,
  };
}

export function drawRandomCard(messages: Messages): DrawnCard {
  const index = Math.floor(Math.random() * tarotDeck.length);
  return localizeCard(index, messages);
}

export function drawMultipleCards(count: number, messages: Messages): DrawnCard[] {
  const shuffled = shuffleDeck().slice(0, count);
  return shuffled.map((index) => localizeCard(index, messages));
}
