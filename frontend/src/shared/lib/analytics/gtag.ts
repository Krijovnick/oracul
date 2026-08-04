import { getGaMeasurementId } from './config';
import type { AnalyticsEvent } from './events';

type GtagParams = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function withGtag(callback: (gtag: NonNullable<Window['gtag']>, id: string) => void) {
  if (typeof window === 'undefined') return;

  const id = getGaMeasurementId();
  if (!id || typeof window.gtag !== 'function') return;

  callback(window.gtag, id);
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
