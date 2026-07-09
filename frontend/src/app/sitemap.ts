import type { MetadataRoute } from 'next';
import { locales, type Locale } from '@/i18n/locales';
import { dreamDictionaryIds } from '@/shared/config/dream-dictionaries';
import {
  dreamDictionaryRoute,
  routes,
  spreadRoute,
} from '@/shared/config/routes';
import { spreadIds } from '@/shared/config/spreads';
import { localizedPath } from '@/shared/lib/seo';
import { getSiteUrlFromEnv } from '@/shared/config/site';

function addLocalizedEntries(
  entries: MetadataRoute.Sitemap,
  path: string,
  options: Omit<MetadataRoute.Sitemap[number], 'url'>,
): void {
  const base = getSiteUrlFromEnv();

  for (const locale of locales) {
    entries.push({
      url: `${base}${localizedPath(path, locale as Locale)}`,
      ...options,
    });
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date();

  addLocalizedEntries(entries, routes.home, {
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 1,
  });

  for (const path of [routes.tarot, routes.dreams]) {
    addLocalizedEntries(entries, path, {
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  }

  for (const spreadId of spreadIds) {
    addLocalizedEntries(entries, spreadRoute(spreadId), {
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  for (const dictionaryId of dreamDictionaryIds) {
    addLocalizedEntries(entries, dreamDictionaryRoute(dictionaryId), {
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  return entries;
}
