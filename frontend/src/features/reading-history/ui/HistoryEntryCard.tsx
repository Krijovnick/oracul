'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import type { Locale } from '@/i18n/locales';
import type { HistoryEntry } from '@/shared/model/history';
import { InterpretationPanel } from '@/shared/ui/interpretation-panel';

interface HistoryEntryCardProps {
  entry: HistoryEntry;
  onDelete: (id: string) => void;
}

function formatDate(iso: string, locale: Locale): string {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(iso));
}

function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}…`;
}

export function HistoryEntryCard({ entry, onDelete }: HistoryEntryCardProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations('history');
  const tReading = useTranslations('reading');
  const [expanded, setExpanded] = useState(false);

  const typeLabel = entry.type === 'tarot' ? t('tarotReading') : t('dreamReading');
  const title = entry.type === 'tarot' ? entry.spreadTitle : entry.dictionaryTitle;
  const preview =
    entry.type === 'tarot'
      ? truncate(entry.question, 120)
      : truncate(entry.description, 120);

  return (
    <article className="frame-border relative rounded-2xl bg-black/30 p-5 md:p-6">
      <div className="relative z-[2] flex flex-col gap-3">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <p className="mb-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--gold-mid)]">
              {typeLabel}
            </p>
            <h2 className="gold-title text-xl md:text-2xl">{title}</h2>
            <p className="oracle-subtitle mt-1 text-sm text-white/60">
              {formatDate(entry.createdAt, locale)}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onDelete(entry.id)}
            className="shrink-0 text-xs font-medium uppercase tracking-[0.14em] text-white/50 transition-colors hover:text-red-300"
          >
            {t('delete')}
          </button>
        </div>

        <p className="oracle-subtitle text-left leading-relaxed text-white/80">{preview}</p>

        <button
          type="button"
          onClick={() => setExpanded((value) => !value)}
          className="self-start text-xs font-medium uppercase tracking-[0.14em] text-[var(--gold-mid)] transition-colors hover:text-white"
        >
          {expanded ? t('hideDetails') : t('showDetails')}
        </button>

        {expanded && (
          <div className="flex flex-col gap-5 border-t border-[var(--gold-mid)]/20 pt-5">
            {entry.type === 'tarot' ? (
              <>
                <div>
                  <h3 className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-white/70">
                    {t('question')}
                  </h3>
                  <p className="oracle-subtitle whitespace-pre-wrap text-left leading-relaxed">
                    {entry.question}
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-white/70">
                    {t('cards')}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {entry.cards.map((card, index) => (
                      <li
                        key={`${card.position}-${card.cardName}-${index}`}
                        className="oracle-subtitle text-left text-sm"
                      >
                        <span className="text-[var(--gold-mid)]">{card.position}:</span>{' '}
                        {card.cardName}
                        <span className="text-white/50">
                          {' '}
                          ({card.reversed ? tReading('reversed') : tReading('upright')})
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <div>
                <h3 className="mb-2 text-xs font-medium uppercase tracking-[0.16em] text-white/70">
                  {t('dreamDescription')}
                </h3>
                <p className="oracle-subtitle whitespace-pre-wrap text-left leading-relaxed">
                  {entry.description}
                </p>
              </div>
            )}

            <InterpretationPanel interpretation={entry.interpretation} />
          </div>
        )}
      </div>
    </article>
  );
}
