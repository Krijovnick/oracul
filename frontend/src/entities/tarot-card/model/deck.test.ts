import { describe, expect, it } from 'vitest';
import { tarotDeck, getCardName } from '@/entities/tarot-card/model/deck';
import en from '@/i18n/messages/en';

describe('tarotDeck', () => {
  it('contains 78 cards', () => {
    expect(tarotDeck).toHaveLength(78);
  });

  it('has unique card ids', () => {
    const ids = tarotDeck.map((card) => card.id);
    expect(new Set(ids).size).toBe(78);
  });

  it('has image paths under /images/tarot/', () => {
    for (const card of tarotDeck) {
      expect(card.imageSrc).toMatch(/^\/images\/tarot\/.+\.png$/);
      expect(getCardName(card, en).length).toBeGreaterThan(0);
    }
  });
});
