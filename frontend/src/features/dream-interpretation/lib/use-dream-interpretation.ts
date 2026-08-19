import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import type { Locale } from '@/i18n/locales';
import type { DreamDictionary } from '@/shared/config/dream-dictionaries';
import { AnalyticsEvents, trackError, trackEvent } from '@/shared/lib/analytics';
import { saveHistoryEntry } from '@/shared/lib/history-storage';
import { isNetworkError } from '@/shared/lib/http/is-network-error';
import { interpretDream } from '../api/interpret-dream';

export type DreamPhase = 'idle' | 'loading' | 'result' | 'error';

export function useDreamInterpretation(dictionary: DreamDictionary) {
  const locale = useLocale() as Locale;
  const t = useTranslations('reading');

  const [description, setDescription] = useState('');
  const [phase, setPhase] = useState<DreamPhase>('idle');
  const [interpretation, setInterpretation] = useState('');
  const [error, setError] = useState('');

  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  const canInterpret = description.trim().length >= 10 && phase === 'idle';

  const handleInterpret = useCallback(async () => {
    if (!canInterpret) return;

    trackEvent(AnalyticsEvents.dreamInterpret, { dictionaryId: dictionary.id });

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setPhase('loading');
    setError('');
    setInterpretation('');

    try {
      const result = await interpretDream(
        {
          dictionaryId: dictionary.id,
          description: description.trim(),
          locale,
        },
        controller.signal,
      );

      if (controller.signal.aborted) return;

      saveHistoryEntry({
        id: crypto.randomUUID(),
        type: 'dream',
        createdAt: new Date().toISOString(),
        locale,
        dictionaryId: dictionary.id,
        dictionaryTitle: dictionary.title,
        description: description.trim(),
        interpretation: result.interpretation,
      });

      setInterpretation(result.interpretation);
      setPhase('result');
      trackEvent(AnalyticsEvents.dreamSuccess, { dictionaryId: dictionary.id });
    } catch (err) {
      if (controller.signal.aborted) return;
      if (isNetworkError(err)) {
        setError(t('networkError'));
        setPhase('error');
        trackEvent(AnalyticsEvents.dreamNetworkError, { dictionaryId: dictionary.id });
        return;
      }
      setError(err instanceof Error ? err.message : t('genericError'));
      setPhase('error');
      trackEvent(AnalyticsEvents.dreamError, { dictionaryId: dictionary.id });
      trackError(err, { source: 'dream_interpretation', dictionaryId: dictionary.id });
    }
  }, [canInterpret, description, dictionary.id, dictionary.title, locale, t]);

  const handleReset = useCallback(() => {
    abortRef.current?.abort();
    trackEvent(AnalyticsEvents.dreamReset, { dictionaryId: dictionary.id });
    setDescription('');
    setInterpretation('');
    setError('');
    setPhase('idle');
  }, [dictionary.id]);

  return {
    description,
    setDescription,
    phase,
    interpretation,
    error,
    canInterpret,
    handleInterpret,
    handleReset,
  };
}
