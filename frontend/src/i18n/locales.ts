export const locales = ['en', 'fr', 'es', 'pt', 'de', 'ru'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeLabels: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  es: 'Español',
  pt: 'Português',
  de: 'Deutsch',
  ru: 'Русский',
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Country codes mapped to preferred locale (geolocation fallback). */
export const countryToLocale: Record<string, Locale> = {
  US: 'en',
  GB: 'en',
  AU: 'en',
  CA: 'en',
  IE: 'en',
  NZ: 'en',
  FR: 'fr',
  BE: 'fr',
  CH: 'fr',
  LU: 'fr',
  MC: 'fr',
  ES: 'es',
  MX: 'es',
  AR: 'es',
  CO: 'es',
  CL: 'es',
  PE: 'es',
  VE: 'es',
  PT: 'pt',
  BR: 'pt',
  AO: 'pt',
  DE: 'de',
  AT: 'de',
  LI: 'de',
  RU: 'ru',
  BY: 'ru',
  KZ: 'ru',
  UA: 'ru',
};
