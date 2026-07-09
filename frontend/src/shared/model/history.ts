import type { Locale } from '@/i18n/locales';
import type { DreamDictionaryId } from '@/shared/config/dream-dictionaries';
import type { SpreadId } from '@/shared/config/spreads';
import type { ReadingCard } from '@/features/tarot-reading/api/interpret-reading';

export type TarotHistoryEntry = {
  id: string;
  type: 'tarot';
  createdAt: string;
  locale: Locale;
  spreadId: SpreadId;
  spreadTitle: string;
  question: string;
  cards: ReadingCard[];
  interpretation: string;
};

export type DreamHistoryEntry = {
  id: string;
  type: 'dream';
  createdAt: string;
  locale: Locale;
  dictionaryId: DreamDictionaryId;
  dictionaryTitle: string;
  description: string;
  interpretation: string;
};

export type HistoryEntry = TarotHistoryEntry | DreamHistoryEntry;
