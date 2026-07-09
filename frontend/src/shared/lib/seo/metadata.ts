import type { Metadata } from 'next';
import { locales, type Locale } from '@/i18n/locales';
import { getSiteUrlFromEnv } from '@/shared/config/site';
import { absoluteUrl, localizedPath } from './urls';

const openGraphLocale: Record<Locale, string> = {
  en: 'en_US',
  fr: 'fr_FR',
  es: 'es_ES',
  pt: 'pt_BR',
  de: 'de_DE',
  ru: 'ru_RU',
};

const defaultOgImage = '/images/oracle-hero.png';

function buildLanguageAlternates(path: string, origin?: string): Record<string, string> {
  const base = origin ?? getSiteUrlFromEnv();
  const languages: Record<string, string> = {};

  for (const locale of locales) {
    languages[locale] = `${base}${localizedPath(path, locale)}`;
  }

  languages['x-default'] = absoluteUrl(path, 'en', origin);
  return languages;
}

function toAbsoluteImage(image: string, origin?: string): string {
  if (image.startsWith('http')) {
    return image;
  }

  return `${origin ?? getSiteUrlFromEnv()}${image}`;
}

export interface PageMetadataInput {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  siteName: string;
  image?: string;
  robots?: Metadata['robots'];
  origin?: string;
  includeAlternates?: boolean;
  openGraphType?: 'website' | 'article';
}

export function buildPageMetadata({
  locale,
  path,
  title,
  description,
  siteName,
  image = defaultOgImage,
  robots,
  origin,
  includeAlternates = true,
  openGraphType = 'website',
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path, locale, origin);
  const imageUrl = toAbsoluteImage(image, origin);
  const alternateLocales = locales
    .filter((entry) => entry !== locale)
    .map((entry) => openGraphLocale[entry]);

  return {
    title,
    description,
    robots,
    alternates: includeAlternates
      ? {
          canonical: url,
          languages: buildLanguageAlternates(path, origin),
        }
      : {
          canonical: url,
        },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: openGraphLocale[locale],
      alternateLocale: alternateLocales,
      type: openGraphType,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
  };
}
