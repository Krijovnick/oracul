export function getCardSizeClass(cardCount: number): string {
  if (cardCount <= 3) return 'w-28 sm:w-36 md:w-44';
  if (cardCount <= 6) return 'w-20 sm:w-28 md:w-32';
  return 'w-16 sm:w-20 md:w-24';
}

export function getCardsGridClass(cardCount: number): string {
  if (cardCount <= 1) return 'flex justify-center';
  if (cardCount <= 6) return 'grid-cols-2 sm:grid-cols-3';
  return 'grid-cols-3 sm:grid-cols-4 md:grid-cols-6';
}
