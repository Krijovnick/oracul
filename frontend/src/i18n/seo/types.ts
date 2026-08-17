import type { DreamDictionaryId } from '@/shared/config/dream-dictionaries';
import type { SpreadId } from '@/shared/config/spreads';

/** One landing page in the semantic core: queries plus on-page SEO copy. */
export interface PageSeo {
  /** Head query this URL is built for. */
  primary: string;
  /** Supporting queries for title, description and (for Yandex) keywords. */
  queries: string[];
  title: string;
  description: string;
  h1: string;
}

export interface LocaleSeo {
  home: PageSeo;
  tarot: PageSeo;
  dreams: PageSeo;
  spreads: Record<SpreadId, PageSeo>;
  dreamDictionaries: Record<DreamDictionaryId, PageSeo>;
}

export function seoPage(
  primary: string,
  queries: string[],
  title: string,
  description: string,
  h1: string,
): PageSeo {
  return { primary, queries, title, description, h1 };
}
