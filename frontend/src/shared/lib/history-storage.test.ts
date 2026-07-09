import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { TarotHistoryEntry } from '@/shared/model/history';
import {
  clearHistory,
  deleteHistoryEntry,
  getHistoryEntries,
  saveHistoryEntry,
} from './history-storage';

const sampleTarotEntry = (id: string, createdAt: string): TarotHistoryEntry => ({
  id,
  type: 'tarot',
  createdAt,
  locale: 'en',
  spreadId: 'three-cards',
  spreadTitle: 'Three cards',
  question: 'What awaits me?',
  cards: [{ position: 'Past', cardName: 'The Fool', reversed: false }],
  interpretation: 'A new beginning.',
});

function createLocalStorageMock(): Storage {
  const store = new Map<string, string>();

  return {
    get length() {
      return store.size;
    },
    clear() {
      store.clear();
    },
    getItem(key: string) {
      return store.get(key) ?? null;
    },
    key(index: number) {
      return [...store.keys()][index] ?? null;
    },
    removeItem(key: string) {
      store.delete(key);
    },
    setItem(key: string, value: string) {
      store.set(key, value);
    },
  };
}

describe('history-storage', () => {
  beforeEach(() => {
    vi.stubGlobal('localStorage', createLocalStorageMock());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('saves and returns entries sorted by newest first', () => {
    saveHistoryEntry(sampleTarotEntry('older', '2026-01-01T10:00:00.000Z'));
    saveHistoryEntry(sampleTarotEntry('newer', '2026-01-02T10:00:00.000Z'));

    expect(getHistoryEntries().map((entry) => entry.id)).toEqual(['newer', 'older']);
  });

  it('deletes a single entry', () => {
    saveHistoryEntry(sampleTarotEntry('keep', '2026-01-01T10:00:00.000Z'));
    saveHistoryEntry(sampleTarotEntry('remove', '2026-01-02T10:00:00.000Z'));

    deleteHistoryEntry('remove');

    expect(getHistoryEntries().map((entry) => entry.id)).toEqual(['keep']);
  });

  it('clears all entries', () => {
    saveHistoryEntry(sampleTarotEntry('one', '2026-01-01T10:00:00.000Z'));
    clearHistory();
    expect(getHistoryEntries()).toEqual([]);
  });
});
