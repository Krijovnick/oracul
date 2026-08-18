'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { getGaMeasurementId } from './config';
import { gaPageView } from './gtag';

function buildPageUrl(pathname: string, search: string) {
  return `${pathname}${search ? `?${search}` : ''}`;
}

function GaSpaHits() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams?.toString() ?? '';
  const isFirstHit = useRef(true);

  useEffect(() => {
    // First page_view is sent by the server-rendered gtag('config') snippet.
    if (isFirstHit.current) {
      isFirstHit.current = false;
      return;
    }

    gaPageView(buildPageUrl(pathname, search), document.title);
  }, [pathname, search]);

  return null;
}

export function GoogleAnalytics() {
  if (!getGaMeasurementId()) return null;

  return <GaSpaHits />;
}
