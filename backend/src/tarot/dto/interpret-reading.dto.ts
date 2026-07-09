export interface ReadingCardDto {
  position: string;
  cardName: string;
  reversed: boolean;
}

export type SpreadId =
  | 'yes-no'
  | 'card-of-day'
  | 'three-cards'
  | 'celtic-cross'
  | 'horseshoe'
  | 'relationship-pyramid'
  | 'star'
  | 'tree-of-life'
  | 'year'
  | 'situation';

export interface InterpretReadingDto {
  spreadId: SpreadId;
  question: string;
  locale?: string;
  cards: ReadingCardDto[];
}
