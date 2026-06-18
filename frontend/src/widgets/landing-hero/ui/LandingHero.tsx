import Image from 'next/image';
import Link from 'next/link';
import { CardBack } from '@/entities/tarot-card';
import { navLinks, routes } from '@/shared/config/routes';

export function LandingHero() {
  return (
    <div className="landing-page relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/moon-bg.png"
          alt=""
          fill
          priority
          className="object-cover opacity-[0.18]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(212,175,55,0.12)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_60%,rgba(180,130,40,0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </div>

      <div className="stars pointer-events-none absolute inset-0" aria-hidden="true" />

      <nav className="relative z-20 flex items-center justify-end gap-8 px-8 py-6 md:px-14">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-xs font-medium uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-[#d4af37]"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <section className="relative z-10 mx-auto grid max-w-7xl flex-1 items-center gap-10 px-6 pb-20 pt-4 md:grid-cols-2 md:gap-16 md:px-14 md:pb-28 md:pt-8">
        <div className="relative flex flex-col items-start">
          <div
            className="pointer-events-none absolute -left-16 top-1/2 h-[420px] w-[420px] -translate-y-1/2 opacity-[0.07]"
            aria-hidden="true"
          >
            <div className="h-full w-full rounded-full border border-[#d4af37]/30" />
            <div className="absolute inset-8 rounded-full border border-[#d4af37]/20" />
            <div className="absolute inset-16 rounded-full border border-[#d4af37]/15" />
          </div>

          <h1 className="gold-title mb-6 max-w-lg text-5xl leading-[1.05] sm:text-6xl md:text-7xl lg:text-8xl">
            Твой Личный Оракул
          </h1>

          <p className="mb-10 max-w-md text-sm leading-relaxed text-white/55 md:text-base">
            Откройте тайны судьбы через древнее искусство Таро и мудрость снов.
            Персональные предсказания ждут вас.
          </p>

          <Link href={routes.tarot} className="gold-button group inline-flex items-center gap-3">
            <span>Получить карту</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            >
              <rect
                x="3"
                y="2"
                width="14"
                height="20"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M7 6h6M7 10h6M7 14h4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Link>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2" aria-hidden="true">
            {[0, 1, 2, 3].map((i) => (
              <CardBack key={i} index={i} />
            ))}
          </div>

          <div className="image-frame relative z-10 w-full max-w-sm md:max-w-md">
            <div className="frame-border relative overflow-hidden rounded-2xl">
              <Image
                src="/images/oracle-hero.png"
                alt="Мистический оракул"
                width={480}
                height={640}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10 flex justify-center gap-2 pb-8" aria-hidden="true">
        <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
      </div>
    </div>
  );
}
