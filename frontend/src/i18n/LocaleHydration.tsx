'use client';

import { useEffect } from 'react';
import { useLocale } from 'next-intl';
import { useRouter } from '@/i18n/routing';
import { getPreferredLocale, setStoredLocale } from '@/i18n/locale-storage';
import type { Locale } from '@/i18n/locales';

/**
 * Syncs locale between localStorage, cookies, and the URL on first visit.
 */
export function LocaleHydration() {
  const locale = useLocale() as Locale;
  const router = useRouter();

  useEffect(() => {
    document.documentElement.lang = locale;

    const preferred = getPreferredLocale();

    if (preferred && preferred !== locale) {
      router.replace('/', { locale: preferred });
      return;
    }

    setStoredLocale(locale);
  }, [locale, router]);

  return null;
}
