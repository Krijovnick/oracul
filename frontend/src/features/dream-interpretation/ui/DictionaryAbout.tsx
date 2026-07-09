'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import type { DreamDictionary } from '@/shared/config/dream-dictionaries';

interface DictionaryAboutProps {
  dictionary: DreamDictionary;
}

export function DictionaryAbout({ dictionary }: DictionaryAboutProps) {
  const t = useTranslations('dreams');

  return (
    <div className="mb-10 w-full space-y-4 text-center">
      <p className="oracle-subtitle text-sm text-white/50">{dictionary.features}</p>
      {dictionary.about.map((paragraph) => (
        <p key={paragraph} className="oracle-subtitle leading-relaxed">
          {paragraph}
        </p>
      ))}
      <Link
        href="/dreams"
        className="inline-block text-sm text-[var(--gold-mid)]/80 underline-offset-4 transition hover:text-[var(--gold-mid)] hover:underline"
      >
        {t('chooseAnother')}
      </Link>
    </div>
  );
}
