import { OraclePageShell } from '@/shared/ui/oracle-page-shell';
import { HomeSections } from '@/widgets/home-sections';
import { LandingHero } from '@/widgets/landing-hero';

export function HomePage() {
  return (
    <OraclePageShell>
      <LandingHero />
      <HomeSections />
    </OraclePageShell>
  );
}
