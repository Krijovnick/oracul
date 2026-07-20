import { OraclePageShell } from '@/shared/ui/oracle-page-shell';
import { LandingNav } from '@/widgets/landing-nav';

interface OracleLayoutProps {
  children: React.ReactNode;
}

export function OracleLayout({ children }: OracleLayoutProps) {
  return (
    <OraclePageShell>
      <LandingNav />
      <main className="flex flex-1 flex-col">{children}</main>
    </OraclePageShell>
  );
}
