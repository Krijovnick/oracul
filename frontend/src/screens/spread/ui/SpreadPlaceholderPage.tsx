import { OracleLayout } from '@/widgets/oracle-layout';

interface SpreadPlaceholderPageProps {
  title: string;
}

export function SpreadPlaceholderPage({ title }: SpreadPlaceholderPageProps) {
  return (
    <OracleLayout>
      <div className="mx-auto flex max-w-2xl flex-col items-center px-6 py-24 text-center md:py-32">
        <h1 className="gold-title mb-6 text-4xl sm:text-5xl md:text-6xl">{title}</h1>
        <p className="oracle-subtitle">Страница в разработке</p>
      </div>
    </OracleLayout>
  );
}
