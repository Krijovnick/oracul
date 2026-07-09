'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { CARD_ASPECT_CLASS, CARD_BACK_SRC, CARD_IMAGE_SIZES, CARD_WIDTH_CLASS } from '../model/constants';
import type { DrawnCard } from '../model/types';

interface TarotCardProps {
  drawn: DrawnCard;
  revealed: boolean;
  className?: string;
}

export function FlippableCard({ drawn, revealed, className = '' }: TarotCardProps) {
  const t = useTranslations('reading');
  const { card, reversed } = drawn;
  const widthClass = className || CARD_WIDTH_CLASS;

  return (
    <div
      className={`relative overflow-visible ${CARD_ASPECT_CLASS} ${widthClass}`}
      style={{ perspective: '1200px' }}
    >
      <motion.div
        className="relative h-full w-full"
        initial={false}
        animate={{ rotateY: revealed ? 180 : 0 }}
        transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          className="tarot-card-frame absolute inset-0"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <Image
            src={CARD_BACK_SRC}
            alt={t('cardBack')}
            fill
            className="object-contain"
            sizes={CARD_IMAGE_SIZES}
          />
        </div>

        <div
          className="tarot-card-frame absolute inset-0"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <Image
            src={card.imageSrc}
            alt={card.name}
            fill
            className={`object-contain ${reversed ? 'rotate-180' : ''}`}
            sizes={CARD_IMAGE_SIZES}
          />
        </div>
      </motion.div>
    </div>
  );
}
