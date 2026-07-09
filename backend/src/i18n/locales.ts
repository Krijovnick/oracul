export const supportedLocales = ['en', 'fr', 'es', 'pt', 'de', 'ru'] as const;

export type SupportedLocale = (typeof supportedLocales)[number];

export const defaultLocale: SupportedLocale = 'en';

export function isSupportedLocale(value: string): value is SupportedLocale {
  return (supportedLocales as readonly string[]).includes(value);
}

export function resolveLocale(locale?: string): SupportedLocale {
  if (locale && isSupportedLocale(locale)) {
    return locale;
  }
  return defaultLocale;
}

export const localeLanguageNames: Record<SupportedLocale, string> = {
  en: 'English',
  fr: 'French',
  es: 'Spanish',
  pt: 'Portuguese',
  de: 'German',
  ru: 'Russian',
};
