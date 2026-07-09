import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getMessages } from '@/i18n/messages';
import type { Locale } from '@/i18n/locales';
import { routing } from '@/i18n/routing';
import {
  dreamDictionaryIds,
  getDreamDictionaryById,
} from '@/shared/config/dream-dictionaries';
import { dreamDictionaryRoute } from '@/shared/config/routes';
import { createPageMetadata } from '@/shared/lib/seo';
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
    return { title: 'Not found' };
  }

  return createPageMetadata({
    locale: locale as Locale,
    path: dreamDictionaryRoute(dictionaryId),
    title: `${dictionary.title} | ${messages.metadata.title}`,
    description: dictionary.description,
    image: '/images/dream-dictionary.png',
  });
}

export default async function Page({ params }: PageProps) {
  const { dictionaryId, locale } = await params;
  const messages = getMessages(locale as Locale);
  const dictionary = getDreamDictionaryById(dictionaryId, messages);
  if (!dictionary) notFound();

  return <DreamInterpretationPage dictionary={dictionary} />;
}
