'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export interface SpreadCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  href: string;
  buttonLabel?: string;
}

export function SpreadCard({
  imageSrc,
  imageAlt,
  title,
  description,
  href,
  buttonLabel,
}: SpreadCardProps) {
  const t = useTranslations('tarot');

  return (
    <article className="flex flex-col items-center text-center">
      <div className="frame-border relative mb-5 w-32 overflow-hidden rounded-xl sm:w-36">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={144}
          height={144}
          className="aspect-square w-full object-cover"
        />
      </div>

      <h2 className="gold-title mb-2 text-2xl sm:text-3xl">{title}</h2>

      <p className="oracle-subtitle mb-6 max-w-xs">{description}</p>

      <Link href={href} className="gold-button">
        {buttonLabel ?? t('start')}
      </Link>
    </article>
  );
}
