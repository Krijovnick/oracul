'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { CARD_ASPECT_CLASS, CARD_BACK_SRC, CARD_IMAGE_SIZES, CARD_WIDTH_CLASS } from '../model/constants';

interface CardDeckProps {
  onDraw: () => void;
  disabled?: boolean;
  cardCount?: number;
  drawing?: boolean;
}

export function CardDeck({
  onDraw,
  disabled = false,
  cardCount = 1,
  drawing = false,
}: CardDeckProps) {
  const t = useTranslations('reading');

  return (
    <div className="flex flex-col items-center gap-6">
      <button
        type="button"
        onClick={onDraw}
        disabled={disabled || drawing}
        className={`group relative ${CARD_WIDTH_CLASS} cursor-pointer overflow-visible disabled:cursor-not-allowed`}
        aria-label={t('deckAriaLabel')}
      >
        <div
          className={`relative ${CARD_ASPECT_CLASS} w-full pt-2 pb-3 ${
            drawing ? 'deck-interactive--drawing' : 'deck-interactive'
          }`}
        >
          <div
            className="tarot-card-frame absolute inset-0 border-[var(--gold-mid)]/30"
            style={{ transform: 'translate(5px, 8px) rotate(3deg)', zIndex: 0 }}
            aria-hidden="true"
          >
            <div className="tarot-card-frame__fill bg-[#0d1528]" />
          </div>
          <div
            className="tarot-card-frame absolute inset-0 border-[var(--gold-mid)]/35"
            style={{ transform: 'translate(2px, 4px) rotate(1deg)', zIndex: 1 }}
            aria-hidden="true"
          >
            <div className="tarot-card-frame__fill bg-[#0d1528]" />
          </div>

          <div className="tarot-card-frame absolute inset-0" style={{ zIndex: 2 }}>
            <Image
              src={CARD_BACK_SRC}
              alt=""
              fill
              className="object-contain"
              sizes={CARD_IMAGE_SIZES}
              priority
            />
          </div>

          {!drawing && (
            <div className="deck-glow-ring pointer-events-none absolute -inset-2 rounded-2xl border border-[var(--gold-mid)]/20" />
          )}
        </div>
      </button>

      <p className="oracle-subtitle max-w-sm text-center">
        {t('deckHint', { count: cardCount })}
      </p>
    </div>
  );
}
