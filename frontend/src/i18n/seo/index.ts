import type { Locale } from '../locales';
import type { DreamDictionaryId } from '@/shared/config/dream-dictionaries';
import type { SpreadId } from '@/shared/config/spreads';
import type { LocaleSeo, PageSeo } from './types';
import en from './en';
import fr from './fr';
import es from './es';
import pt from './pt';
import de from './de';
import ru from './ru';

const allSeo: Record<Locale, LocaleSeo> = {
  en,
  fr,
  es,
  pt,
  de,
  ru,
};

export function getSeo(locale: Locale): LocaleSeo {
  return allSeo[locale];
}

export function getSpreadSeo(locale: Locale, spreadId: SpreadId): PageSeo {
  return getSeo(locale).spreads[spreadId];
}

export function getDreamDictionarySeo(
  locale: Locale,
  dictionaryId: DreamDictionaryId,
): PageSeo {
  return getSeo(locale).dreamDictionaries[dictionaryId];
}

export type { LocaleSeo, PageSeo } from './types';
