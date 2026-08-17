import { describe, expect, it } from 'vitest';
import { locales } from '@/i18n/locales';
import { dreamDictionaryIds } from '@/shared/config/dream-dictionaries';
import { spreadIds } from '@/shared/config/spreads';
import { getSeo } from './index';

describe('semantic core', () => {
  it('covers every locale, spread and dream dictionary', () => {
    for (const locale of locales) {
      const seo = getSeo(locale);

      expect(seo.home.primary.length).toBeGreaterThan(0);
      expect(seo.tarot.primary.length).toBeGreaterThan(0);
      expect(seo.dreams.primary.length).toBeGreaterThan(0);

      for (const spreadId of spreadIds) {
        const page = seo.spreads[spreadId];
        expect(page, `${locale} missing spread ${spreadId}`).toBeDefined();
        expect(page.title.length).toBeGreaterThan(0);
        expect(page.queries.length).toBeGreaterThan(0);
      }

      for (const dictionaryId of dreamDictionaryIds) {
        const page = seo.dreamDictionaries[dictionaryId];
        expect(page, `${locale} missing dictionary ${dictionaryId}`).toBeDefined();
        expect(page.title.length).toBeGreaterThan(0);
        expect(page.queries.length).toBeGreaterThan(0);
      }
    }
  });

  it('keeps titles unique within a locale', () => {
    for (const locale of locales) {
      const seo = getSeo(locale);
      const titles = [
        seo.home.title,
        seo.tarot.title,
        seo.dreams.title,
        ...spreadIds.map((id) => seo.spreads[id].title),
        ...dreamDictionaryIds.map((id) => seo.dreamDictionaries[id].title),
      ];

      expect(new Set(titles).size).toBe(titles.length);
    }
  });
});
