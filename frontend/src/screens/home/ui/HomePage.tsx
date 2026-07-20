import { OracleLayout } from '@/widgets/oracle-layout';
import { HomeSections } from '@/widgets/home-sections';
import { LandingHero } from '@/widgets/landing-hero';

export function HomePage() {
  return (
    <OracleLayout>
      <LandingHero />
      <HomeSections />
    </OracleLayout>
  );
}
