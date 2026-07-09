import type { Metadata } from 'next';
import { getMessages } from '@/i18n/messages';
import type { Locale } from '@/i18n/locales';
import { routes } from '@/shared/config/routes';
import { createPageMetadata } from '@/shared/lib/seo';
import { HomePage } from '@/screens/home';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const messages = getMessages(locale as Locale);

  return createPageMetadata({
    locale: locale as Locale,
    path: routes.home,
    title: messages.metadata.title,
    description: messages.home.subtitle,
  });
}

export default function Page() {
  return <HomePage />;
}
