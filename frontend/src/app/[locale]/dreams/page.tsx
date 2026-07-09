import type { Metadata } from 'next';
import { getMessages } from '@/i18n/messages';
import type { Locale } from '@/i18n/locales';
import { routes } from '@/shared/config/routes';
import { createPageMetadata } from '@/shared/lib/seo';
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

export default function Page() {
  return <DreamsPage />;
}
