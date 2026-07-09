import type { Metadata } from 'next';
import { getMessages } from '@/i18n/messages';
import type { Locale } from '@/i18n/locales';
import { routes } from '@/shared/config/routes';
import { createPageMetadata } from '@/shared/lib/seo';
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

export default function Page() {
  return <TarotPage />;
}
