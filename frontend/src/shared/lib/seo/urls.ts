import { defaultLocale, type Locale } from '@/i18n/locales';
import { getSiteUrlFromEnv } from '@/shared/config/site';

/** Public pathname for a locale, respecting `localePrefix: 'as-needed'`. */
export function localizedPath(path: string, locale: Locale): string {
  const normalized = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;

  if (locale === defaultLocale) {
    return normalized || '/';
  }

  return `/${locale}${normalized}`;
}

export function absoluteUrl(path: string, locale: Locale, origin?: string): string {
  const base = origin ?? getSiteUrlFromEnv();
  return `${base}${localizedPath(path, locale)}`;
}
