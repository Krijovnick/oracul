'use client';

import { useEffect } from 'react';
import { useDreamsStore } from '@/features/dreams-status';

export function DreamsPage() {
  const { status, isLoading, fetchStatus } = useDreamsStore();

  useEffect(() => {
    void fetchStatus();
  }, [fetchStatus]);

  return (
    <div className="mx-auto w-full max-w-4xl flex-1 px-6 py-16">
      <h1 className="mb-4 text-3xl font-semibold tracking-tight">
        Расшифровка снов
      </h1>
      <p className="mb-8 text-zinc-600 dark:text-zinc-400">
        Здесь появится ввод сновидения и его интерпретация.
      </p>

      <div className="rounded-2xl border border-dashed border-zinc-300 p-8 text-center dark:border-zinc-700">
        {isLoading ? (
          <p className="text-zinc-500">Загрузка...</p>
        ) : (
          <p className="text-zinc-600 dark:text-zinc-400">
            {status ?? 'Ожидание ответа от API'}
          </p>
        )}
      </div>
    </div>
  );
}
