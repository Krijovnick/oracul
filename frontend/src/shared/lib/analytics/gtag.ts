import { getGaMeasurementId } from './config';
import type { AnalyticsEvent } from './events';

type GtagParams = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function getGtagClient(): NonNullable<Window['gtag']> | null {
  if (typeof window === 'undefined') return null;
  if (typeof window.gtag === 'function') return window.gtag;

  const dataLayer = window.dataLayer;
  if (!Array.isArray(dataLayer)) return null;

  // Head snippet may have created dataLayer before gtag.js replaced the stub.
  return function gtag() {
    // Official gtag stub pushes the Arguments object.
    // eslint-disable-next-line prefer-rest-params
    dataLayer.push(arguments);
  };
}

function withGtag(callback: (gtag: NonNullable<Window['gtag']>, id: string) => void) {
  if (typeof window === 'undefined') return;

  const id = getGaMeasurementId();
  const gtag = getGtagClient();
  if (!id || !gtag) return;

  callback(gtag, id);
}

export function gaPageView(url: string, title?: string) {
  withGtag((gtag, id) => {
    gtag('config', id, {
      page_path: url,
      page_title: title,
    });
  });
}

export function gaEvent(event: AnalyticsEvent, params?: GtagParams) {
  withGtag((gtag) => {
    gtag('event', event, params);
  });
}

export function gaGrantAnalyticsConsent() {
  withGtag((gtag) => {
    gtag('consent', 'update', {
      analytics_storage: 'granted',
    });
  });
}
