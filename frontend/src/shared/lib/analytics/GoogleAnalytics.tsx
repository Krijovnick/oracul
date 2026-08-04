'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { getGaMeasurementId } from './config';
import { gaPageView } from './gtag';

function buildPageUrl(pathname: string, search: string) {
  return `${pathname}${search ? `?${search}` : ''}`;
}

const GA_SCRIPT_ID = 'ga-gtag-js';
let gaInitialized = false;

function ensureGtag(measurementId: string) {
  if (typeof window === 'undefined' || gaInitialized) return;

  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== 'function') {
    window.gtag = function gtag() {
      // Official gtag stub pushes the Arguments object.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments);
    };
  }

  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    send_page_view: true,
    anonymize_ip: true,
  });

  if (!document.getElementById(GA_SCRIPT_ID)) {
    const script = document.createElement('script');
    script.id = GA_SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
  }

  gaInitialized = true;
}

function GaSpaHits({ measurementId }: { measurementId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstHit = useRef(true);

  useEffect(() => {
    ensureGtag(measurementId);

    if (isFirstHit.current) {
      isFirstHit.current = false;
      return;
    }

    const search = searchParams?.toString() ?? '';
    gaPageView(
      buildPageUrl(pathname, search),
      typeof document !== 'undefined' ? document.title : undefined,
    );
  }, [pathname, searchParams, measurementId]);

  return null;
}

export function GoogleAnalytics() {
  const measurementId = getGaMeasurementId();
  if (!measurementId) return null;

  return <GaSpaHits measurementId={measurementId} />;
}
