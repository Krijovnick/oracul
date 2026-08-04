'use client';

import { useEffect, useId, useRef, useState } from 'react';
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
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const navRef = useRef<HTMLElement>(null);

  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/tarot', label: t('tarot') },
    { href: '/dreams', label: t('dreams') },
    { href: '/history', label: t('history') },
  ] as const;

  const handleLocaleChange = async (nextLocale: Locale) => {
    if (nextLocale === locale) return;
    setMenuOpen(false);
    await saveLocaleToUserProfile(nextLocale);
    router.replace(pathname, { locale: nextLocale });
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (target && navRef.current && !navRef.current.contains(target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
    };
  }, [menuOpen]);

  const linkClassName = (active: boolean) =>
    `text-xs font-medium uppercase tracking-[0.2em] transition-colors ${
      active
        ? 'text-[var(--gold-mid)]'
        : 'text-white/80 hover:text-[var(--gold-mid)]'
    }`;

  const languageSelect = (id: string) => (
    <>
      <label className="sr-only" htmlFor={id}>
        {t('language')}
      </label>
      <select
        id={id}
        value={locale}
        onChange={(event) => handleLocaleChange(event.target.value as Locale)}
        className="w-full cursor-pointer rounded-lg border border-[var(--gold-mid)]/30 bg-black/50 px-3 py-2 text-xs font-medium uppercase tracking-[0.12em] text-white/90 outline-none transition focus:border-[var(--gold-mid)]/60 md:w-auto md:px-2 md:py-1.5"
      >
        {locales.map((code) => (
          <option key={code} value={code} className="bg-black text-white">
            {localeLabels[code]}
          </option>
        ))}
      </select>
    </>
  );

  return (
    <nav
      ref={navRef}
      className="relative z-40 flex items-center justify-end px-5 py-5 md:gap-8 md:px-14 md:py-6"
    >
      {/* Desktop */}
      <div className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => {
          const active = isNavLinkActive(pathname, link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={linkClassName(active)}
              aria-current={active ? 'page' : undefined}
            >
              {link.label}
            </Link>
          );
        })}
        {languageSelect('language-select')}
      </div>

      {/* Mobile toggle */}
      <button
        type="button"
        className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--gold-mid)]/30 text-[var(--gold-mid)] transition hover:border-[var(--gold-mid)]/60 md:hidden"
        aria-expanded={menuOpen}
        aria-controls={menuId}
        aria-label={menuOpen ? t('menuClose') : t('menuOpen')}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="sr-only">{menuOpen ? t('menuClose') : t('menuOpen')}</span>
        <span className="flex w-4 flex-col gap-1.5" aria-hidden>
          <span
            className={`block h-px w-full bg-current transition duration-200 ${
              menuOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-px w-full bg-current transition duration-200 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-px w-full bg-current transition duration-200 ${
              menuOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </span>
      </button>

      {/* Mobile panel */}
      <div
        id={menuId}
        role="region"
        aria-label={t('menuOpen')}
        inert={menuOpen ? undefined : true}
        className={`absolute inset-x-0 top-full origin-top px-5 pb-4 transition duration-200 md:hidden ${
          menuOpen
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-1 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-1 rounded-xl border border-[var(--gold-mid)]/25 bg-black/90 p-3 shadow-[0_16px_40px_rgba(0,0,0,0.55)] backdrop-blur-md">
          {navLinks.map((link) => {
            const active = isNavLinkActive(pathname, link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${linkClassName(active)} rounded-lg px-3 py-3`}
                aria-current={active ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-1 border-t border-[var(--gold-mid)]/15 px-1 pt-3">
            {languageSelect('language-select-mobile')}
          </div>
        </div>
      </div>
    </nav>
  );
}
