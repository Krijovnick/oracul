import type { Metadata } from 'next';
import { getMessages } from '@/i18n/messages';
import type { Locale } from '@/i18n/locales';
import { getSiteUrl } from '@/shared/config/site';
import { routes } from '@/shared/config/routes';
import {
  buildBreadcrumbJsonLd,
  buildWebPageJsonLd,
  createPageMetadata,
} from '@/shared/lib/seo';
import { JsonLd } from '@/shared/ui/json-ld';
import { DreamsPage } from '@/screens/dreams';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const messages = getMessages(locale as Locale);

  return createPageMetadata({
    locale: locale as Locale,
    path: routes.dreams,
    title: `${messages.dreams.dictionariesTitle} | ${messages.metadata.title}`,
    description: messages.home.dreamsDescription,
    image: '/images/dream-dictionary.png',
  });
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const messages = getMessages(typedLocale);
  const origin = await getSiteUrl();
  const title = messages.dreams.dictionariesTitle;
  const description = messages.home.dreamsDescription;

  return (
    <>
      <JsonLd
        data={[
          buildWebPageJsonLd({
            locale: typedLocale,
            name: title,
            description,
            path: routes.dreams,
            siteName: messages.metadata.title,
            origin,
            image: '/images/dream-dictionary.png',
          }),
          buildBreadcrumbJsonLd(
            [
              { name: messages.nav.home, path: routes.home },
              { name: title, path: routes.dreams },
            ],
            typedLocale,
            origin,
          ),
        ]}
      />
      <DreamsPage />
    </>
  );
}
