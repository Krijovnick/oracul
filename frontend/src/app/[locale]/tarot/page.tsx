import type { Metadata } from 'next';
import { getMessages } from '@/i18n/messages';
import type { Locale } from '@/i18n/locales';
import { getSeo } from '@/i18n/seo';
import { getSiteUrl } from '@/shared/config/site';
import { routes } from '@/shared/config/routes';
import {
  buildBreadcrumbJsonLd,
  buildWebPageJsonLd,
  createSeoPageMetadata,
} from '@/shared/lib/seo';
import { JsonLd } from '@/shared/ui/json-ld';
import { TarotPage } from '@/screens/tarot';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const seo = getSeo(locale as Locale);

  return createSeoPageMetadata({
    locale: locale as Locale,
    path: routes.tarot,
    page: seo.tarot,
    image: '/images/spread-three-cards.png',
  });
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const messages = getMessages(typedLocale);
  const seo = getSeo(typedLocale);
  const origin = await getSiteUrl();

  return (
    <>
      <JsonLd
        data={[
          buildWebPageJsonLd({
            locale: typedLocale,
            name: seo.tarot.h1,
            description: seo.tarot.description,
            path: routes.tarot,
            siteName: messages.metadata.title,
            origin,
            image: '/images/spread-three-cards.png',
          }),
          buildBreadcrumbJsonLd(
            [
              { name: messages.nav.home, path: routes.home },
              { name: seo.tarot.h1, path: routes.tarot },
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
