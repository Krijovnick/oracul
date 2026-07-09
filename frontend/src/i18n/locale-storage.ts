import type { Locale } from './locales';
import { isLocale } from './locales';
import { LOCALE_STORAGE_KEY } from './detect-locale';

const USER_PROFILE_LOCALE_KEY = 'oracle-user-locale';

export function getStoredLocale(): Locale | null {
  if (typeof window === 'undefined') return null;
  const value = localStorage.getItem(LOCALE_STORAGE_KEY);
  return value && isLocale(value) ? value : null;
}

export function setStoredLocale(locale: Locale): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  document.cookie = `${LOCALE_STORAGE_KEY}=${locale};path=/;max-age=${60 * 60 * 24 * 365};samesite=lax`;
}

/**
 * Persists locale for authenticated users. When auth is added, replace the
 * localStorage fallback with a PATCH to the user profile API.
 */
export async function saveLocaleToUserProfile(locale: Locale): Promise<void> {
  setStoredLocale(locale);

  if (typeof window === 'undefined') return;

  localStorage.setItem(USER_PROFILE_LOCALE_KEY, locale);

  // Future: await fetch('/api/user/preferences', { method: 'PATCH', body: JSON.stringify({ locale }) });
}

export function getUserProfileLocale(): Locale | null {
  if (typeof window === 'undefined') return null;
  const value = localStorage.getItem(USER_PROFILE_LOCALE_KEY);
  return value && isLocale(value) ? value : null;
}

export function getPreferredLocale(): Locale | null {
  return getUserProfileLocale() ?? getStoredLocale();
}
