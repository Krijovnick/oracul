'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';
import { FlippableCard } from '@/entities/tarot-card';
import { getCardSizeClass, getCardsGridClass } from '@/entities/tarot-card/lib/card-layout';
import type { PositionedCard } from '@/entities/tarot-card/model/types';
import type { ReadingPhase } from '../lib/use-spread-reading';

interface DrawnCardsGridProps {
  cards: PositionedCard[];
  cardCount: number;
  phase: ReadingPhase;
}

export function DrawnCardsGrid({ cards, cardCount, phase }: DrawnCardsGridProps) {
  const t = useTranslations('reading');
  const isMultiCard = cardCount > 1;
  const cardSizeClass = getCardSizeClass(cardCount);
  const gridClass = getCardsGridClass(cardCount);
  const showFaces = phase !== 'drawing';

  return (
    <motion.div
      className={`grid w-full justify-center gap-4 ${gridClass}`}
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {cards.map((drawn, index) => (
        <motion.div
          key={drawn.card.id}
          className="flex flex-col items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
        >
          {isMultiCard && (
            <p className="oracle-subtitle text-center text-xs sm:text-sm">{drawn.position}</p>
          )}
          <div className="overflow-visible p-1">
            <FlippableCard
              drawn={drawn}
              revealed={showFaces}
              className={cardSizeClass}
            />
          </div>
          {showFaces && (
            <div className="text-center">
              <p className="gold-title text-sm sm:text-base">{drawn.card.name}</p>
              <p className="oracle-subtitle text-xs">
                {drawn.reversed ? t('reversed') : t('upright')}
              </p>
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
