'use client';

import { useTranslations } from 'next-intl';
import { getContactEmail } from '@/shared/config/site';

export function SiteFooter() {
  const t = useTranslations('footer');
  const email = getContactEmail();
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 mt-auto border-t border-[var(--gold-mid)]/15 px-6 py-8 md:px-14">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
        {email ? (
          <p className="text-sm text-white/70">
            <span className="text-white/50">{t('contact')}: </span>
            <a
              href={`mailto:${email}`}
              className="text-[var(--gold-mid)] transition-colors hover:text-[var(--gold-light)]"
            >
              {email}
            </a>
          </p>
        ) : null}

        <p className="max-w-xl text-xs leading-relaxed text-white/40">{t('disclaimer')}</p>

        <p className="text-xs text-white/30">{t('copyright', { year })}</p>
      </div>
    </footer>
  );
}
