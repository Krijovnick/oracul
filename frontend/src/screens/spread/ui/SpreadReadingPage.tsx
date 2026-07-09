'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useLocale, useTranslations } from 'next-intl';
import type { Locale } from '@/i18n/locales';
import { CardDeck } from '@/entities/tarot-card';
import { OracleLayout } from '@/widgets/oracle-layout';
import { PageTitle } from '@/shared/ui/page-title';
import type { Spread } from '@/shared/config/spreads';
import { useSpreadReading } from '@/features/tarot-reading/lib/use-spread-reading';
import { DrawnCardsGrid } from '@/features/tarot-reading/ui/DrawnCardsGrid';
import { InterpretationPanel } from '@/shared/ui/interpretation-panel';
import { ShareButton } from '@/features/share-reading';
import { QuestionPrompt } from '@/features/tarot-reading/ui/QuestionPrompt';
import { ReadingError } from '@/shared/ui/reading-error';
import { SpreadAbout } from '@/features/tarot-reading/ui/SpreadAbout';

interface SpreadReadingPageProps {
  spread: Spread;
}

export function SpreadReadingPage({ spread }: SpreadReadingPageProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations('reading');
  const {
    question,
    setQuestion,
    phase,
    drawnCards,
    interpretation,
    error,
    canDraw,
    handleDraw,
    handleReset,
  } = useSpreadReading(spread);

  const showDeck = phase === 'idle';
  const showCards = !showDeck && drawnCards.length > 0;

  return (
    <OracleLayout>
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-16 md:py-24">
        <PageTitle>{spread.title}</PageTitle>

        <SpreadAbout paragraphs={spread.about} />

        <QuestionPrompt
          value={question}
          onChange={setQuestion}
          placeholder={spread.promptHint}
          disabled={phase !== 'idle'}
        />

        <AnimatePresence mode="wait">
          {showDeck && (
            <div key="deck">
              <CardDeck
                cardCount={spread.cardCount}
                onDraw={handleDraw}
                disabled={!canDraw}
              />
            </div>
          )}

          {showCards && (
            <motion.div
              key="cards"
              className="flex w-full flex-col items-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <DrawnCardsGrid
                cards={drawnCards}
                cardCount={spread.cardCount}
                phase={phase}
              />

              {phase === 'loading' && (
                <motion.p
                  className="oracle-subtitle text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {t('oracleReading')}
                </motion.p>
              )}

              {phase === 'result' && interpretation && (
                <InterpretationPanel interpretation={interpretation} />
              )}

              {phase === 'error' && <ReadingError message={error} />}

              {(phase === 'result' || phase === 'error') && (
                <div className="flex flex-wrap items-center justify-center gap-4">
                  {phase === 'result' && interpretation && (
                    <ShareButton
                      payload={{
                        type: 'tarot',
                        locale,
                        spreadId: spread.id,
                        question: question.trim(),
                        cards: drawnCards.map((card) => ({
                          position: card.position,
                          cardId: card.card.id,
                          reversed: card.reversed,
                        })),
                        interpretation,
                      }}
                    />
                  )}
                  <button type="button" onClick={handleReset} className="gold-button">
                    {t('newSpread')}
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </OracleLayout>
  );
}
