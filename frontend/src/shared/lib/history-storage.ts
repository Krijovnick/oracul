import type { HistoryEntry } from '@/shared/model/history';

const HISTORY_STORAGE_KEY = 'oracle-reading-history';
const MAX_ENTRIES = 50;

function isHistoryEntry(value: unknown): value is HistoryEntry {
  if (!value || typeof value !== 'object') return false;

  const entry = value as Record<string, unknown>;

  if (typeof entry.id !== 'string' || typeof entry.createdAt !== 'string') return false;
  if (typeof entry.interpretation !== 'string' || typeof entry.locale !== 'string') return false;

  if (entry.type === 'tarot') {
    return (
      typeof entry.spreadId === 'string' &&
      typeof entry.spreadTitle === 'string' &&
      typeof entry.question === 'string' &&
      Array.isArray(entry.cards)
    );
  }

  if (entry.type === 'dream') {
    return (
      typeof entry.dictionaryId === 'string' &&
      typeof entry.dictionaryTitle === 'string' &&
      typeof entry.description === 'string'
    );
  }

  return false;
}

function readEntries(): HistoryEntry[] {
  if (typeof localStorage === 'undefined') return [];

  try {
    const raw = localStorage.getItem(HISTORY_STORAGE_KEY);
    if (!raw) return [];

    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed.filter(isHistoryEntry);
  } catch {
    return [];
  }
}

function writeEntries(entries: HistoryEntry[]): void {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(entries));
}

export function getHistoryEntries(): HistoryEntry[] {
  return readEntries().sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
}

export function saveHistoryEntry(entry: HistoryEntry): void {
  const entries = readEntries();
  const next = [entry, ...entries.filter((item) => item.id !== entry.id)].slice(0, MAX_ENTRIES);
  writeEntries(next);
}

export function deleteHistoryEntry(id: string): void {
  writeEntries(readEntries().filter((entry) => entry.id !== id));
}

export function clearHistory(): void {
  if (typeof localStorage === 'undefined') return;
  localStorage.removeItem(HISTORY_STORAGE_KEY);
}
