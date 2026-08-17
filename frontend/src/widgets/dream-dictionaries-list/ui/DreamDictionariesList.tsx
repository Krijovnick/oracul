'use client';

import { useLocale, useTranslations } from 'next-intl';
import { DreamDictionaryCard } from '@/entities/dream-dictionary';
import { getDreamDictionaries } from '@/shared/config/dream-dictionaries';
import { useAppMessages } from '@/i18n/use-app-messages';
import type { Locale } from '@/i18n/locales';
import { getSeo } from '@/i18n/seo';

export function DreamDictionariesList() {
  const locale = useLocale() as Locale;
  const t = useTranslations('dreams');
  const messages = useAppMessages();
  const dreamDictionaries = getDreamDictionaries(messages);
  const seo = getSeo(locale);

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-4 md:px-14">
      <h1 className="gold-title mb-4 text-center text-3xl sm:text-4xl">{seo.dreams.h1}</h1>
      <p className="oracle-subtitle mx-auto mb-12 max-w-2xl text-center">{t('dictionariesIntro')}</p>

      <ul className="grid list-none gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {dreamDictionaries.map((dictionary) => (
          <li key={dictionary.id}>
            <DreamDictionaryCard dictionary={dictionary} />
          </li>
        ))}
      </ul>
    </section>
  );
}
