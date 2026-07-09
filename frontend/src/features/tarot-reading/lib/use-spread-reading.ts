import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import type { Locale } from '@/i18n/locales';
import { useAppMessages } from '@/i18n/use-app-messages';
import { drawMultipleCards } from '@/entities/tarot-card/lib/draw-card';
import type { PositionedCard } from '@/entities/tarot-card/model/types';
import type { Spread } from '@/shared/config/spreads';
import { saveHistoryEntry } from '@/shared/lib/history-storage';
import { interpretReading } from '../api/interpret-reading';

export type ReadingPhase = 'idle' | 'drawing' | 'revealing' | 'loading' | 'result' | 'error';

const DRAW_ANIMATION_MS = 600;
const REVEAL_ANIMATION_MS_SINGLE = 1000;
const REVEAL_ANIMATION_MS_MULTI = 1500;

function delay(ms: number, signal?: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(resolve, ms);
    signal?.addEventListener(
      'abort',
      () => {
        clearTimeout(timer);
        reject(signal.reason);
      },
      { once: true },
    );
  });
}

export function useSpreadReading(spread: Spread) {
  const locale = useLocale() as Locale;
  const t = useTranslations('reading');
  const messages = useAppMessages();

  const [question, setQuestion] = useState('');
  const [phase, setPhase] = useState<ReadingPhase>('idle');
  const [drawnCards, setDrawnCards] = useState<PositionedCard[]>([]);
  const [interpretation, setInterpretation] = useState('');
  const [error, setError] = useState('');

  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    return () => {
      abortRef.current?.abort();
    };
  }, []);

  const canDraw = question.trim().length > 0 && phase === 'idle';
  const isMultiCard = spread.cardCount > 1;

  const handleDraw = useCallback(async () => {
    if (!canDraw) return;

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    const cards = drawMultipleCards(spread.cardCount, messages).map((drawn, i) => ({
      ...drawn,
      position: spread.positions[i] ?? t('positionFallback', { number: i + 1 }),
    }));

    const readingCards = cards.map((c) => ({
      position: c.position,
      cardName: c.card.name,
      reversed: c.reversed,
    }));

    setDrawnCards(cards);
    setPhase('drawing');
    setError('');
    setInterpretation('');

    try {
      await delay(DRAW_ANIMATION_MS, controller.signal);
      setPhase('revealing');

      await delay(
        isMultiCard ? REVEAL_ANIMATION_MS_MULTI : REVEAL_ANIMATION_MS_SINGLE,
        controller.signal,
      );
      setPhase('loading');

      const result = await interpretReading(
        {
          spreadId: spread.id,
          question: question.trim(),
          locale,
          cards: readingCards,
        },
        controller.signal,
      );

      if (controller.signal.aborted) return;

      saveHistoryEntry({
        id: crypto.randomUUID(),
        type: 'tarot',
        createdAt: new Date().toISOString(),
        locale,
        spreadId: spread.id,
        spreadTitle: spread.title,
        question: question.trim(),
        cards: readingCards,
        interpretation: result.interpretation,
      });

      setInterpretation(result.interpretation);
      setPhase('result');
    } catch (err) {
      if (controller.signal.aborted) return;
      setError(err instanceof Error ? err.message : t('genericError'));
      setPhase('error');
    }
  }, [canDraw, question, spread, isMultiCard, messages, locale, t]);

  const handleReset = useCallback(() => {
    abortRef.current?.abort();
    setQuestion('');
    setDrawnCards([]);
    setInterpretation('');
    setError('');
    setPhase('idle');
  }, []);

  return {
    question,
    setQuestion,
    phase,
    drawnCards,
    interpretation,
    error,
    canDraw,
    isMultiCard,
    handleDraw,
    handleReset,
  };
}
