'use client';

import { useTranslations } from 'next-intl';

interface DreamDescriptionPromptProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  disabled: boolean;
}

export function DreamDescriptionPrompt({
  value,
  onChange,
  placeholder,
  disabled,
}: DreamDescriptionPromptProps) {
  const t = useTranslations('reading');

  return (
    <div className="mb-10 w-full">
      <p className="oracle-subtitle mb-4 text-center leading-relaxed">{t('dreamIntro')}</p>

      <label htmlFor="dream-description" className="sr-only">
        {t('dreamLabel')}
      </label>
      <textarea
        id="dream-description"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        rows={6}
        className="w-full resize-none rounded-xl border border-[var(--gold-mid)]/30 bg-black/40 px-4 py-3 text-sm text-white/90 placeholder:text-white/30 outline-none transition focus:border-[var(--gold-mid)]/60 focus:ring-1 focus:ring-[var(--gold-mid)]/30 disabled:opacity-50 md:text-base"
      />
    </div>
  );
}
