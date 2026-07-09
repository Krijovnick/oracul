import { getMessages } from '@/i18n/messages';
import type { Locale } from '@/i18n/locales';
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
