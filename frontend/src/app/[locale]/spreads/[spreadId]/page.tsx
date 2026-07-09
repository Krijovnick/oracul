import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getMessages } from '@/i18n/messages';
import type { Locale } from '@/i18n/locales';
import { routing } from '@/i18n/routing';
import { getSpreadById, spreadIds } from '@/shared/config/spreads';
import { spreadRoute } from '@/shared/config/routes';
import { createPageMetadata } from '@/shared/lib/seo';
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
    return { title: 'Not found' };
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
  const messages = getMessages(locale as Locale);
  const spread = getSpreadById(spreadId, messages);
  if (!spread) notFound();

  return <SpreadReadingPage spread={spread} />;
}
