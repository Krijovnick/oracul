import { getMessages } from '@/i18n/messages';
import type { Locale } from '@/i18n/locales';
import type { PageSeo } from '@/i18n/seo';
import { getSiteUrl } from '@/shared/config/site';
import { buildPageMetadata, type PageMetadataInput } from './metadata';

type CreatePageMetadataInput = Omit<PageMetadataInput, 'siteName' | 'origin'> & {
  locale: Locale;
};

export async function createPageMetadata(input: CreatePageMetadataInput) {
  const messages = getMessages(input.locale);
  const origin = await getSiteUrl();

  return buildPageMetadata({
    ...input,
    siteName: messages.metadata.title,
    origin,
  });
}

export async function createSeoPageMetadata(
  input: Omit<CreatePageMetadataInput, 'title' | 'description' | 'keywords'> & {
    page: PageSeo;
  },
) {
  const { page, ...rest } = input;

  return createPageMetadata({
    ...rest,
    title: page.title,
    description: page.description,
    keywords: page.queries,
  });
}
