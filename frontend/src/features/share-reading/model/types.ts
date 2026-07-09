import type { Locale } from '@/i18n/locales';
import type { DreamDictionaryId } from '@/shared/config/dream-dictionaries';
import type { SpreadId } from '@/shared/config/spreads';

export interface ShareCardPayload {
  position: string;
  cardId: string;
  reversed: boolean;
}

export interface CreateTarotSharePayload {
  type: 'tarot';
  locale: Locale;
  spreadId: SpreadId;
  question: string;
  cards: ShareCardPayload[];
  interpretation: string;
}

export interface CreateDreamSharePayload {
  type: 'dream';
  locale: Locale;
  dictionaryId: DreamDictionaryId;
  description: string;
  interpretation: string;
}

export type CreateSharePayload = CreateTarotSharePayload | CreateDreamSharePayload;

export interface TarotShareData {
  spreadId: SpreadId;
  question: string;
  cards: ShareCardPayload[];
  interpretation: string;
}

export interface DreamShareData {
  dictionaryId: DreamDictionaryId;
  description: string;
  interpretation: string;
}

export type SharedReading =
  | {
      id: string;
      type: 'tarot';
      locale: Locale;
      createdAt: string;
      payload: TarotShareData;
    }
  | {
      id: string;
      type: 'dream';
      locale: Locale;
      createdAt: string;
      payload: DreamShareData;
    };
