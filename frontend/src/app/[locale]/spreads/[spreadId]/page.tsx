import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getMessages } from '@/i18n/messages';
import type { Locale } from '@/i18n/locales';
import { routing } from '@/i18n/routing';
import { getSpreadById, spreadIds } from '@/shared/config/spreads';
import { getSiteUrl } from '@/shared/config/site';
import { routes, spreadRoute } from '@/shared/config/routes';
import {
  buildBreadcrumbJsonLd,
  buildWebPageJsonLd,
  createPageMetadata,
} from '@/shared/lib/seo';
import { JsonLd } from '@/shared/ui/json-ld';
import { SpreadReadingPage } from '@/screens/spread';

interface PageProps {
  params: Promise<{ locale: string; spreadId: string }>;
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    spreadIds.map((spreadId) => ({ locale, spreadId })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, spreadId } = await params;
  const messages = getMessages(locale as Locale);
  const spread = getSpreadById(spreadId, messages);

  if (!spread) {
    return { title: 'Not found', robots: { index: false, follow: true } };
  }

  return createPageMetadata({
    locale: locale as Locale,
    path: spreadRoute(spreadId),
    title: `${spread.title} | ${messages.metadata.title}`,
    description: spread.description,
    image: spread.imageSrc,
  });
}

export default async function Page({ params }: PageProps) {
  const { spreadId, locale } = await params;
  const typedLocale = locale as Locale;
  const messages = getMessages(typedLocale);
  const spread = getSpreadById(spreadId, messages);
  if (!spread) notFound();

  const origin = await getSiteUrl();
  const path = spreadRoute(spreadId);

  return (
    <>
      <JsonLd
        data={[
          buildWebPageJsonLd({
            locale: typedLocale,
            name: spread.title,
            description: spread.description,
            path,
            siteName: messages.metadata.title,
            origin,
            image: spread.imageSrc,
          }),
          buildBreadcrumbJsonLd(
            [
              { name: messages.nav.home, path: routes.home },
              { name: messages.nav.tarot, path: routes.tarot },
              { name: spread.title, path },
            ],
            typedLocale,
            origin,
          ),
        ]}
      />
      <SpreadReadingPage spread={spread} />
    </>
  );
}
