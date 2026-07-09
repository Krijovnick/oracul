import { describe, expect, it } from 'vitest';
import { getCardSizeClass, getCardsGridClass } from './card-layout';

describe('getCardSizeClass', () => {
  it('returns larger sizes for fewer cards', () => {
    expect(getCardSizeClass(1)).toContain('md:w-44');
    expect(getCardSizeClass(6)).toContain('md:w-32');
    expect(getCardSizeClass(12)).toContain('md:w-24');
  });
});

describe('getCardsGridClass', () => {
  it('uses flex layout for a single card', () => {
    expect(getCardsGridClass(1)).toBe('flex justify-center');
  });

  it('uses responsive grid for multiple cards', () => {
    expect(getCardsGridClass(3)).toContain('grid-cols-2');
    expect(getCardsGridClass(10)).toContain('grid-cols-3');
  });
});
