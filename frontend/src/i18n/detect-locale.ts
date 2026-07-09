import { countryToLocale, defaultLocale, isLocale, type Locale, locales } from './locales';

const LOCALE_STORAGE_KEY = 'oracle-locale';

export { LOCALE_STORAGE_KEY };

function parseAcceptLanguage(header: string): string[] {
  return header
    .split(',')
    .map((part) => part.trim().split(';')[0]?.toLowerCase())
    .filter(Boolean) as string[];
}

function matchLocale(preferred: string[]): Locale {
  for (const tag of preferred) {
    const exact = locales.find((locale) => locale === tag);
    if (exact) return exact;

    const base = tag.split('-')[0];
    const partial = locales.find((locale) => locale === base);
    if (partial) return partial;
  }

  return defaultLocale;
}

export function detectLocaleFromAcceptLanguage(header: string | null): Locale {
  if (!header) return defaultLocale;
  return matchLocale(parseAcceptLanguage(header));
}

export function detectLocaleFromCountry(country: string | null | undefined): Locale | null {
  if (!country) return null;
  return countryToLocale[country.toUpperCase()] ?? null;
}

export function resolveLocale(options: {
  cookie?: string | null;
  acceptLanguage?: string | null;
  country?: string | null;
}): Locale {
  if (options.cookie && isLocale(options.cookie)) {
    return options.cookie;
  }

  const geoLocale = detectLocaleFromCountry(options.country);
  if (geoLocale) return geoLocale;

  return detectLocaleFromAcceptLanguage(options.acceptLanguage ?? null);
}
