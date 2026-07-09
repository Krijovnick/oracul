'use client';

import { useCallback, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import type { Locale } from '@/i18n/locales';
import { getShareUrl } from '@/shared/config/site';
import { createShare } from '../api/share-reading';
import type { CreateSharePayload } from '../model/types';

interface ShareButtonProps {
  payload: CreateSharePayload;
}

export function ShareButton({ payload }: ShareButtonProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations('share');
  const [shareUrl, setShareUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle');

  const handleOpen = useCallback(async () => {
    setIsLoading(true);
    setHasError(false);

    try {
      const { id } = await createShare(payload);
      const publicOrigin = process.env.NEXT_PUBLIC_SITE_URL;
      setShareUrl(getShareUrl(id, locale, publicOrigin || window.location.origin));
      setCopyStatus('idle');
    } catch {
      setHasError(true);
      window.setTimeout(() => setHasError(false), 2500);
    } finally {
      setIsLoading(false);
    }
  }, [locale, payload]);

  const handleClose = useCallback(() => {
    setShareUrl(null);
    setCopyStatus('idle');
  }, []);

  const handleCopy = useCallback(async () => {
    if (!shareUrl) return;

    await navigator.clipboard.writeText(shareUrl);
    setCopyStatus('copied');
    window.setTimeout(() => setCopyStatus('idle'), 2000);
  }, [shareUrl]);

  const label = isLoading ? t('sharing') : hasError ? t('error') : t('share');

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        disabled={isLoading}
        className="outline-gold-button disabled:cursor-not-allowed disabled:opacity-50"
      >
        {label}
      </button>

      {shareUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4"
          onClick={handleClose}
        >
          <div
            className="frame-border relative w-full max-w-lg rounded-2xl bg-black/95 p-6 md:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative z-[2] flex flex-col gap-4">
              <input
                type="text"
                readOnly
                value={shareUrl}
                className="share-link-input w-full"
                onFocus={(event) => event.target.select()}
              />
              <button type="button" onClick={handleCopy} className="gold-button w-full sm:w-auto">
                {copyStatus === 'copied' ? t('copied') : t('copy')}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
