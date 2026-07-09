import type { SharedReadingType } from '../entities/shared-reading.entity';

export interface CreateShareCardDto {
  position: string;
  cardId: string;
  reversed: boolean;
}

export interface CreateShareDto {
  type: SharedReadingType;
  locale: string;
  interpretation: string;
  spreadId?: string;
  question?: string;
  cards?: CreateShareCardDto[];
  dictionaryId?: string;
  description?: string;
}
