'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  acceptAnalyticsConsent,
  hasAnalyticsConsent,
  subscribeAnalyticsConsent,
} from '@/shared/lib/analytics/consent';

export function CookieConsentBanner() {
  const t = useTranslations('cookieConsent');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sync = () => setVisible(!hasAnalyticsConsent());
    sync();
    return subscribeAnalyticsConsent(sync);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-[var(--gold-mid)]/25 bg-black/95 px-4 py-4 backdrop-blur-md md:px-8"
      role="dialog"
      aria-live="polite"
      aria-label={t('message')}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-white/70 sm:pr-6">{t('message')}</p>
        <button
          type="button"
          className="gold-button shrink-0 self-end sm:self-auto"
          onClick={() => {
            acceptAnalyticsConsent();
            setVisible(false);
          }}
        >
          {t('accept')}
        </button>
      </div>
    </div>
  );
}
