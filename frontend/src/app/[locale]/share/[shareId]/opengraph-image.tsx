import { ImageResponse } from 'next/og';
import { getShareServer } from '@/features/share-reading';
import {
  getShareDescription,
  getShareOgImage,
  getShareTitle,
} from '@/features/share-reading/lib/share-metadata';
import { getMessages } from '@/i18n/messages';
import type { Locale } from '@/i18n/locales';
import { getSiteUrlFromEnv } from '@/shared/config/site';

export const alt = 'Tarot and dream reading';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

interface ImageProps {
  params: Promise<{ locale: string; shareId: string }>;
}

export default async function Image({ params }: ImageProps) {
  const { shareId } = await params;
  const share = await getShareServer(shareId);
  const siteUrl = getSiteUrlFromEnv();

  if (!share) {
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#050505',
            color: '#d4af37',
            fontSize: 48,
          }}
        >
          Reading not found
        </div>
      ),
      size,
    );
  }

  const messages = getMessages(share.locale as Locale);
  const title = getShareTitle(share, messages);
  const description = getShareDescription(share);
  const coverSrc = `${siteUrl}${getShareOgImage(share, messages)}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: 'linear-gradient(135deg, #050505 0%, #12100a 55%, #050505 100%)',
          padding: 48,
          border: '4px solid #d4af37',
        }}
      >
        <div
          style={{
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            paddingRight: 40,
          }}
        >
          <div
            style={{
              fontSize: 54,
              fontWeight: 700,
              color: '#d4af37',
              lineHeight: 1.1,
              marginBottom: 28,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#e8dcc0',
              lineHeight: 1.45,
            }}
          >
            {description}
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={coverSrc}
          alt=""
          width={300}
          height={534}
          style={{
            objectFit: 'cover',
            borderRadius: 20,
            border: '2px solid rgba(212, 175, 55, 0.6)',
          }}
        />
      </div>
    ),
    size,
  );
}
