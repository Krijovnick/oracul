import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getMessages } from '@/i18n/messages';
import type { Locale } from '@/i18n/locales';
import { routing } from '@/i18n/routing';
import {
  dreamDictionaryIds,
  getDreamDictionaryById,
} from '@/shared/config/dream-dictionaries';
import { getSiteUrl } from '@/shared/config/site';
import { dreamDictionaryRoute, routes } from '@/shared/config/routes';
import {
  buildBreadcrumbJsonLd,
  buildWebPageJsonLd,
  createPageMetadata,
} from '@/shared/lib/seo';
import { JsonLd } from '@/shared/ui/json-ld';
import { DreamInterpretationPage } from '@/screens/dreams';

interface PageProps {
  params: Promise<{ locale: string; dictionaryId: string }>;
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    dreamDictionaryIds.map((dictionaryId) => ({ locale, dictionaryId })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, dictionaryId } = await params;
  const messages = getMessages(locale as Locale);
  const dictionary = getDreamDictionaryById(dictionaryId, messages);

  if (!dictionary) {
    return { title: 'Not found', robots: { index: false, follow: true } };
  }

  return createPageMetadata({
    locale: locale as Locale,
    path: dreamDictionaryRoute(dictionaryId),
    title: `${dictionary.title} | ${messages.metadata.title}`,
    description: dictionary.description,
    image: '/images/home-dreams.png',
  });
}

export default async function Page({ params }: PageProps) {
  const { dictionaryId, locale } = await params;
  const typedLocale = locale as Locale;
  const messages = getMessages(typedLocale);
  const dictionary = getDreamDictionaryById(dictionaryId, messages);
  if (!dictionary) notFound();

  const origin = await getSiteUrl();
  const path = dreamDictionaryRoute(dictionaryId);

  return (
    <>
      <JsonLd
        data={[
          buildWebPageJsonLd({
            locale: typedLocale,
            name: dictionary.title,
            description: dictionary.description,
            path,
            siteName: messages.metadata.title,
            origin,
            image: '/images/home-dreams.png',
          }),
          buildBreadcrumbJsonLd(
            [
              { name: messages.nav.home, path: routes.home },
              { name: messages.nav.dreams, path: routes.dreams },
              { name: dictionary.title, path },
            ],
            typedLocale,
            origin,
          ),
        ]}
      />
      <DreamInterpretationPage dictionary={dictionary} />
    </>
  );
}
