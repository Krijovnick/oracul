'use client';

import { useTranslations } from 'next-intl';
import { SpreadCard } from '@/entities/spread';
import { getSpreads } from '@/shared/config/spreads';
import { useAppMessages } from '@/i18n/use-app-messages';

export function SpreadsList() {
  const t = useTranslations('tarot');
  const messages = useAppMessages();
  const spreads = getSpreads(messages);

  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-4 md:px-14">
      <h1 className="gold-title mb-12 text-center text-3xl sm:text-4xl">{t('spreadsTitle')}</h1>

      <ul className="grid list-none gap-16 sm:grid-cols-2 lg:grid-cols-3 sm:gap-12">
        {spreads.map((spread) => (
          <li key={spread.id}>
            <SpreadCard
              imageSrc={spread.imageSrc}
              imageAlt={spread.title}
              title={spread.title}
              description={spread.description}
              href={spread.href}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
