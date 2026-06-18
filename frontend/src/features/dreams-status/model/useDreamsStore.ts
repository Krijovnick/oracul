import { create } from 'zustand';
import { apiFetch } from '@/shared/api';

interface DreamsState {
  status: string | null;
  isLoading: boolean;
  fetchStatus: () => Promise<void>;
}

export const useDreamsStore = create<DreamsState>((set) => ({
  status: null,
  isLoading: false,
  fetchStatus: async () => {
    set({ isLoading: true });
    try {
      const data = await apiFetch<{ message: string }>('/dreams');
      set({ status: data.message });
    } catch {
      set({ status: 'Не удалось подключиться к серверу' });
    } finally {
      set({ isLoading: false });
    }
  },
}));
