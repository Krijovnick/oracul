'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import type { DreamDictionary } from '@/shared/config/dream-dictionaries';

interface DreamDictionaryCardProps {
  dictionary: DreamDictionary;
}

export function DreamDictionaryCard({ dictionary }: DreamDictionaryCardProps) {
  const t = useTranslations('dreams');

  return (
    <article className="frame-border flex h-full flex-col rounded-2xl bg-black/20 p-6 text-center">
      <h2 className="gold-title mb-2 text-2xl sm:text-3xl">{dictionary.title}</h2>
      <p className="oracle-subtitle mb-3 flex-1">{dictionary.description}</p>
      <p className="mb-6 text-xs text-white/40">{dictionary.features}</p>
      <Link href={dictionary.href} className="gold-button mx-auto">
        {t('interpret')}
      </Link>
    </article>
  );
}
