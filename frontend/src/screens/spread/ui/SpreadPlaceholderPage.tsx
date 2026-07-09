'use client';

import { useTranslations } from 'next-intl';
import { OracleLayout } from '@/widgets/oracle-layout';
import { PageTitle } from '@/shared/ui/page-title';

interface SpreadPlaceholderPageProps {
  title: string;
}

export function SpreadPlaceholderPage({ title }: SpreadPlaceholderPageProps) {
  const t = useTranslations('reading');

  return (
    <OracleLayout>
      <div className="mx-auto flex max-w-2xl flex-col items-center px-6 py-24 text-center md:py-32">
        <PageTitle className="mb-6">{title}</PageTitle>
        <p className="oracle-subtitle">{t('underDevelopment')}</p>
      </div>
    </OracleLayout>
  );
}
