import { OraclePageShell } from '@/shared/ui/oracle-page-shell';
import { LandingHero } from '@/widgets/landing-hero';
import { SpreadsList } from '@/widgets/spreads-list';

export function HomePage() {
  return (
    <OraclePageShell>
      <LandingHero />
      <SpreadsList />
    </OraclePageShell>
  );
}
