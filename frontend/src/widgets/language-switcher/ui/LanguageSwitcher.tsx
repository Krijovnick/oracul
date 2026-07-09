'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { localeLabels, locales, type Locale } from '@/i18n/locales';
import { saveLocaleToUserProfile } from '@/i18n/locale-storage';
import { isNavLinkActive } from '@/shared/lib/nav';
import { Link } from '@/i18n/routing';

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('nav');

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/tarot', label: t('tarot') },
    { href: '/dreams', label: t('dreams') },
    { href: '/history', label: t('history') },
  ] as const;

  const handleLocaleChange = async (nextLocale: Locale) => {
    if (nextLocale === locale) return;
    await saveLocaleToUserProfile(nextLocale);
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <nav className="flex items-center justify-end gap-6 px-8 py-6 md:gap-8 md:px-14">
      <div className="flex items-center gap-6 md:gap-8">
        {navLinks.map((link) => {
          const active = isNavLinkActive(pathname, link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-medium uppercase tracking-[0.2em] transition-colors ${
                active
                  ? 'text-[var(--gold-mid)]'
                  : 'text-white/80 hover:text-[var(--gold-mid)]'
              }`}
              aria-current={active ? 'page' : undefined}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      <label className="sr-only" htmlFor="language-select">
        Language
      </label>
      <select
        id="language-select"
        value={locale}
        onChange={(event) => handleLocaleChange(event.target.value as Locale)}
        className="cursor-pointer rounded-lg border border-[var(--gold-mid)]/30 bg-black/50 px-2 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-white/90 outline-none transition focus:border-[var(--gold-mid)]/60"
      >
        {locales.map((code) => (
          <option key={code} value={code} className="bg-black text-white">
            {localeLabels[code]}
          </option>
        ))}
      </select>
    </nav>
  );
}
