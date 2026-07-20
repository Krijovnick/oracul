import { getContactEmail, getSiteUrlFromEnv } from '@/shared/config/site';
import type { Locale } from '@/i18n/locales';
import { absoluteUrl } from './urls';

export type JsonLdObject = Record<string, unknown>;

export interface BreadcrumbItem {
  name: string;
  path: string;
}

function toAbsoluteImage(image: string, origin: string): string {
  if (image.startsWith('http')) {
    return image;
  }

  return `${origin}${image.startsWith('/') ? image : `/${image}`}`;
}

export function buildWebsiteJsonLd(input: {
  locale: Locale;
  name: string;
  description: string;
  origin?: string;
}): JsonLdObject {
  const origin = input.origin ?? getSiteUrlFromEnv();
  const email = getContactEmail();

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: input.name,
    description: input.description,
    url: absoluteUrl('/', input.locale, origin),
    inLanguage: input.locale,
    publisher: {
      '@type': 'Organization',
      name: input.name,
      url: absoluteUrl('/', input.locale, origin),
      ...(email ? { email } : {}),
    },
  };
}

export function buildWebApplicationJsonLd(input: {
  locale: Locale;
  name: string;
  description: string;
  origin?: string;
  image?: string;
}): JsonLdObject {
  const origin = input.origin ?? getSiteUrlFromEnv();

  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: input.name,
    description: input.description,
    url: absoluteUrl('/', input.locale, origin),
    applicationCategory: 'EntertainmentApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    inLanguage: input.locale,
    ...(input.image
      ? { image: toAbsoluteImage(input.image, origin) }
      : {}),
  };
}

export function buildWebPageJsonLd(input: {
  locale: Locale;
  name: string;
  description: string;
  path: string;
  siteName: string;
  origin?: string;
  image?: string;
}): JsonLdObject {
  const origin = input.origin ?? getSiteUrlFromEnv();

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path, input.locale, origin),
    inLanguage: input.locale,
    isPartOf: {
      '@type': 'WebSite',
      name: input.siteName,
      url: absoluteUrl('/', input.locale, origin),
    },
    ...(input.image
      ? { primaryImageOfPage: toAbsoluteImage(input.image, origin) }
      : {}),
  };
}

export function buildBreadcrumbJsonLd(
  items: BreadcrumbItem[],
  locale: Locale,
  origin?: string,
): JsonLdObject {
  const base = origin ?? getSiteUrlFromEnv();

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path, locale, base),
    })),
  };
}
