'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { CardBack } from '@/entities/tarot-card';
import { LandingNav } from '@/widgets/landing-nav';

export function LandingHero() {
  const t = useTranslations('home');

  return (
    <>
      <LandingNav />

      <section className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 pb-16 pt-4 md:flex-row md:items-center md:justify-center md:gap-10 md:px-8 md:pb-20 md:pt-8">
        <div className="landing-hero-text relative flex flex-col items-center text-center md:-translate-x-8 md:items-end md:text-right lg:-translate-x-12">
          <div
            className="pointer-events-none absolute -left-16 top-1/2 hidden h-[320px] w-[320px] -translate-y-1/2 opacity-[0.07] md:block"
            aria-hidden="true"
          >
            <div className="h-full w-full rounded-full border border-[var(--gold-mid)]/30" />
            <div className="absolute inset-8 rounded-full border border-[var(--gold-mid)]/20" />
            <div className="absolute inset-16 rounded-full border border-[var(--gold-mid)]/15" />
          </div>

          <h1 className="gold-title gold-title--glow mb-6 max-w-lg text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl">
            {t('title')}
          </h1>

          <p className="oracle-subtitle max-w-md">{t('subtitle')}</p>
        </div>

        <div className="landing-hero-image relative flex shrink-0 justify-center">
          <div className="relative w-full max-w-[288px] sm:max-w-[336px] md:max-w-[384px]">
            <div className="pointer-events-none absolute inset-0 z-0 overflow-visible" aria-hidden="true">
              <div className="absolute inset-y-0 right-0 w-[72%] translate-x-3 sm:translate-x-4 md:translate-x-6">
                {[0, 1, 2, 3].map((i) => (
                  <CardBack key={i} index={i} fill />
                ))}
              </div>
            </div>

            <div className="relative z-10 w-full">
              <div className="frame-border relative overflow-hidden rounded-2xl">
                <Image
                  src="/images/oracle-hero.png"
                  alt={t('heroAlt')}
                  width={384}
                  height={512}
                  priority
                  className="h-auto w-full"
                  sizes="(max-width: 768px) 288px, 384px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
