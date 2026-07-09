'use client';

import { useCallback, useEffect, useState } from 'react';
import type { HistoryEntry } from '@/shared/model/history';
import {
  clearHistory,
  deleteHistoryEntry,
  getHistoryEntries,
} from '@/shared/lib/history-storage';

export function useReadingHistory() {
  const [entries, setEntries] = useState<HistoryEntry[]>([]);
  const [isReady, setIsReady] = useState(false);

  const refresh = useCallback(() => {
    setEntries(getHistoryEntries());
    setIsReady(true);
  }, []);

  useEffect(() => {
    refresh();

    const handleStorage = (event: StorageEvent) => {
      if (event.key === null || event.key === 'oracle-reading-history') {
        refresh();
      }
    };

    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, [refresh]);

  const removeEntry = useCallback((id: string) => {
    deleteHistoryEntry(id);
    setEntries(getHistoryEntries());
  }, []);

  const removeAll = useCallback(() => {
    clearHistory();
    setEntries([]);
  }, []);

  return {
    entries,
    isReady,
    removeEntry,
    removeAll,
    refresh,
  };
}
