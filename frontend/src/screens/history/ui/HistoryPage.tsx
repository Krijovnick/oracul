'use client';

import { useTranslations } from 'next-intl';
import { HistoryEntryCard, useReadingHistory } from '@/features/reading-history';
import { OracleLayout } from '@/widgets/oracle-layout';
import { PageTitle } from '@/shared/ui/page-title';

export function HistoryPage() {
  const t = useTranslations('history');
  const { entries, isReady, removeEntry, removeAll } = useReadingHistory();

  return (
    <OracleLayout>
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-16 md:py-24">
        <PageTitle>{t('title')}</PageTitle>

        {isReady && entries.length === 0 && (
          <div className="frame-border w-full rounded-2xl bg-black/30 p-8 text-center">
            <p className="gold-title mb-3 text-2xl">{t('empty')}</p>
            <p className="oracle-subtitle">{t('emptyHint')}</p>
          </div>
        )}

        {entries.length > 0 && (
          <div className="flex w-full flex-col gap-5">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={removeAll}
                className="text-xs font-medium uppercase tracking-[0.14em] text-white/50 transition-colors hover:text-red-300"
              >
                {t('clearAll')}
              </button>
            </div>

            {entries.map((entry) => (
              <HistoryEntryCard key={entry.id} entry={entry} onDelete={removeEntry} />
            ))}
          </div>
        )}
      </div>
    </OracleLayout>
  );
}
