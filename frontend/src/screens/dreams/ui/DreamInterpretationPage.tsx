'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useLocale, useTranslations } from 'next-intl';
import type { Locale } from '@/i18n/locales';
import { OracleLayout } from '@/widgets/oracle-layout';
import { PageTitle } from '@/shared/ui/page-title';
import { InterpretationPanel } from '@/shared/ui/interpretation-panel';
import { ReadingError } from '@/shared/ui/reading-error';
import { ShareButton } from '@/features/share-reading';
import type { DreamDictionary } from '@/shared/config/dream-dictionaries';
import { DictionaryAbout } from '@/features/dream-interpretation/ui/DictionaryAbout';
import { DreamDescriptionPrompt } from '@/features/dream-interpretation/ui/DreamDescriptionPrompt';
import { useDreamInterpretation } from '@/features/dream-interpretation/lib/use-dream-interpretation';

interface DreamInterpretationPageProps {
  dictionary: DreamDictionary;
}

export function DreamInterpretationPage({ dictionary }: DreamInterpretationPageProps) {
  const locale = useLocale() as Locale;
  const t = useTranslations('dreams');
  const {
    description,
    setDescription,
    phase,
    interpretation,
    error,
    canInterpret,
    handleInterpret,
    handleReset,
  } = useDreamInterpretation(dictionary);

  const isLocked = phase !== 'idle';

  return (
    <OracleLayout>
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-16 md:py-24">
        <PageTitle>{t('dictionaryPageTitle', { title: dictionary.title })}</PageTitle>

        <DictionaryAbout dictionary={dictionary} />

        <DreamDescriptionPrompt
          value={description}
          onChange={setDescription}
          placeholder={dictionary.promptHint}
          disabled={isLocked}
        />

        <AnimatePresence mode="wait">
          {phase === 'idle' && (
            <motion.div key="submit" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <button
                type="button"
                onClick={handleInterpret}
                disabled={!canInterpret}
                className="gold-button disabled:cursor-not-allowed disabled:opacity-50"
              >
                {t('interpretDream')}
              </button>
            </motion.div>
          )}

          {(phase === 'loading' || phase === 'result' || phase === 'error') && (
            <motion.div
              key="result"
              className="flex w-full flex-col items-center gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
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
                        type: 'dream',
                        locale,
                        dictionaryId: dictionary.id,
                        description: description.trim(),
                        interpretation,
                      }}
                    />
                  )}
                  <button type="button" onClick={handleReset} className="gold-button">
                    {t('newInterpretation')}
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
