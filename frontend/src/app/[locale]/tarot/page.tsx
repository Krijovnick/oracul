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
import { TarotPage } from '@/screens/tarot';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const messages = getMessages(locale as Locale);

  return createPageMetadata({
    locale: locale as Locale,
    path: routes.tarot,
    title: `${messages.tarot.spreadsTitle} | ${messages.metadata.title}`,
    description: messages.home.tarotDescription,
    image: '/images/spread-three-cards.png',
  });
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const messages = getMessages(typedLocale);
  const origin = await getSiteUrl();
  const title = messages.tarot.spreadsTitle;
  const description = messages.home.tarotDescription;

  return (
    <>
      <JsonLd
        data={[
          buildWebPageJsonLd({
            locale: typedLocale,
            name: title,
            description,
            path: routes.tarot,
            siteName: messages.metadata.title,
            origin,
            image: '/images/spread-three-cards.png',
          }),
          buildBreadcrumbJsonLd(
            [
              { name: messages.nav.home, path: routes.home },
              { name: title, path: routes.tarot },
            ],
            typedLocale,
            origin,
          ),
        ]}
      />
      <TarotPage />
    </>
  );
}
