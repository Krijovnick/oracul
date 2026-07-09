import { describe, expect, it } from 'vitest';
import { drawMultipleCards } from '@/entities/tarot-card/lib/draw-card';
import { tarotDeck } from '@/entities/tarot-card/model/deck';
import en from '@/i18n/messages/en';

describe('drawMultipleCards', () => {
  it('returns the requested number of cards', () => {
    expect(drawMultipleCards(3, en)).toHaveLength(3);
    expect(drawMultipleCards(10, en)).toHaveLength(10);
  });

  it('never returns duplicate cards in a single draw', () => {
    for (let i = 0; i < 20; i++) {
      const cards = drawMultipleCards(10, en);
      const ids = cards.map((c) => c.card.id);
      expect(new Set(ids).size).toBe(ids.length);
    }
  });

  it('does not exceed deck size', () => {
    const cards = drawMultipleCards(tarotDeck.length, en);
    expect(cards).toHaveLength(tarotDeck.length);
  });

  it('assigns reversed flag and localized name to each card', () => {
    const cards = drawMultipleCards(5, en);
    for (const card of cards) {
      expect(typeof card.reversed).toBe('boolean');
      expect(card.card.name.length).toBeGreaterThan(0);
    }
  });
});
