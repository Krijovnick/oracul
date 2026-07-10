'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { OracleLayout } from '@/widgets/oracle-layout';
import { PageTitle } from '@/shared/ui/page-title';

export function NotFoundPage() {
  const t = useTranslations('notFound');

  return (
    <OracleLayout>
      <div className="mx-auto flex max-w-2xl flex-col items-center px-6 py-24 text-center md:py-32">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-white/40">404</p>
        <PageTitle className="mb-6">{t('title')}</PageTitle>
        <p className="oracle-subtitle mb-10 max-w-md">{t('description')}</p>
        <Link href="/" className="gold-button">
          {t('backHome')}
        </Link>
      </div>
    </OracleLayout>
  );
}
