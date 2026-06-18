import { create } from 'zustand';
import { apiFetch } from '@/shared/api';

interface TarotState {
  status: string | null;
  isLoading: boolean;
  fetchStatus: () => Promise<void>;
}

export const useTarotStore = create<TarotState>((set) => ({
  status: null,
  isLoading: false,
  fetchStatus: async () => {
    set({ isLoading: true });
    try {
      const data = await apiFetch<{ message: string }>('/tarot');
      set({ status: data.message });
    } catch {
      set({ status: 'Не удалось подключиться к серверу' });
    } finally {
      set({ isLoading: false });
    }
  },
}));
