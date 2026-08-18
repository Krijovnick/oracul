import { gaGrantAnalyticsConsent } from './gtag';

export const CONSENT_STORAGE_KEY = 'oracle-analytics-consent';
export const CONSENT_VALUE = 'accepted';

export function hasAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return window.localStorage.getItem(CONSENT_STORAGE_KEY) === CONSENT_VALUE;
  } catch {
    return false;
  }
}

export function acceptAnalyticsConsent(): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, CONSENT_VALUE);
  } catch {
    // Ignore quota / private-mode failures; consent still applies this session.
  }
  gaGrantAnalyticsConsent();
  window.dispatchEvent(new Event('oracle-analytics-consent'));
}

export function subscribeAnalyticsConsent(listener: () => void): () => void {
  if (typeof window === 'undefined') return () => undefined;

  const onStorage = (event: StorageEvent) => {
    if (event.key === null || event.key === CONSENT_STORAGE_KEY) {
      listener();
    }
  };

  window.addEventListener('oracle-analytics-consent', listener);
  window.addEventListener('storage', onStorage);

  return () => {
    window.removeEventListener('oracle-analytics-consent', listener);
    window.removeEventListener('storage', onStorage);
  };
}
