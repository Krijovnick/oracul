'use client';

import { Suspense, useEffect, useState, type ReactNode } from 'react';
import { CookieConsentBanner } from '@/widgets/cookie-consent';
import {
  hasAnalyticsConsent,
  subscribeAnalyticsConsent,
} from './consent';
import { GoogleAnalytics } from './GoogleAnalytics';
import { HawkInit } from './HawkInit';

interface AnalyticsProviderProps {
  children: ReactNode;
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const sync = () => setAllowed(hasAnalyticsConsent());
    sync();
    return subscribeAnalyticsConsent(sync);
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <GoogleAnalytics />
      </Suspense>
      {allowed ? <HawkInit /> : null}
      <CookieConsentBanner />
      {children}
    </>
  );
}
