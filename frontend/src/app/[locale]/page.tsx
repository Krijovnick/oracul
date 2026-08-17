import type { Metadata } from 'next';
import { getMessages } from '@/i18n/messages';
import type { Locale } from '@/i18n/locales';
import { getSeo } from '@/i18n/seo';
import { getSiteUrl } from '@/shared/config/site';
import { routes } from '@/shared/config/routes';
import {
  buildWebApplicationJsonLd,
  buildWebsiteJsonLd,
  createSeoPageMetadata,
} from '@/shared/lib/seo';
import { JsonLd } from '@/shared/ui/json-ld';
import { HomePage } from '@/screens/home';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const seo = getSeo(locale as Locale);

  return createSeoPageMetadata({
    locale: locale as Locale,
    path: routes.home,
    page: seo.home,
  });
}

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  const typedLocale = locale as Locale;
  const messages = getMessages(typedLocale);
  const seo = getSeo(typedLocale);
  const origin = await getSiteUrl();
  const name = messages.metadata.title;
  const description = seo.home.description;

  return (
    <>
      <JsonLd
        data={[
          buildWebsiteJsonLd({
            locale: typedLocale,
            name,
            description,
            origin,
          }),
          buildWebApplicationJsonLd({
            locale: typedLocale,
            name,
            description,
            origin,
            image: '/images/oracle-hero.png',
          }),
        ]}
      />
      <HomePage />
    </>
  );
}
