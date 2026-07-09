import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { getShareServer } from '@/features/share-reading';
import {
  getShareDescription,
  getShareOgImage,
  getShareTitle,
} from '@/features/share-reading/lib/share-metadata';
import { getMessages } from '@/i18n/messages';
import type { Locale } from '@/i18n/locales';
import { redirect } from '@/i18n/routing';
import { shareRoute } from '@/shared/config/routes';
import { buildPageMetadata } from '@/shared/lib/seo';
import { getSiteUrl } from '@/shared/config/site';
import { SharedReadingPage } from '@/screens/share';

interface PageProps {
  params: Promise<{ locale: string; shareId: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { shareId } = await params;
  const share = await getShareServer(shareId);

  if (!share) {
    return {
      title: 'Share not found',
    };
  }

  const messages = getMessages(share.locale as Locale);
  const title = getShareTitle(share, messages);
  const description = getShareDescription(share);
  const origin = await getSiteUrl();

  return buildPageMetadata({
    locale: share.locale as Locale,
    path: shareRoute(shareId),
    title,
    description,
    siteName: messages.metadata.title,
    image: getShareOgImage(share, messages),
    origin,
    includeAlternates: false,
    openGraphType: 'article',
  });
}

export default async function Page({ params }: PageProps) {
  const { locale, shareId } = await params;
  const share = await getShareServer(shareId);

  if (!share) {
    notFound();
  }

  if (locale !== share.locale) {
    redirect({ href: `/share/${shareId}`, locale: share.locale as Locale });
  }

  setRequestLocale(share.locale);
  return <SharedReadingPage share={share} />;
}
