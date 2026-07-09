import { tarotDeck, getCardName } from '@/entities/tarot-card/model/deck';
import type { PositionedCard } from '@/entities/tarot-card/model/types';
import type { Messages } from '@/i18n/messages/types';
import type { ShareCardPayload } from '../model/types';

export function buildPositionedCards(
  cards: ShareCardPayload[],
  messages: Messages,
): PositionedCard[] {
  return cards.map((card) => {
    const deckCard = tarotDeck.find((item) => item.id === card.cardId);
    if (!deckCard) {
      throw new Error(`Unknown card: ${card.cardId}`);
    }

    return {
      position: card.position,
      card: {
        ...deckCard,
        name: getCardName(deckCard, messages),
      },
      reversed: card.reversed,
    };
  });
}
