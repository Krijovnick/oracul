import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import { getMessages } from '@/i18n/messages';
import type { Locale } from '@/i18n/locales';
import { NotFoundPage } from '@/screens/not-found';

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await getLocale()) as Locale;
  const messages = getMessages(locale);

  return {
    title: `${messages.notFound.title} | ${messages.metadata.title}`,
    description: messages.notFound.description,
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default function NotFound() {
  return <NotFoundPage />;
}
