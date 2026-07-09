'use client';

import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';

interface InterpretationPanelProps {
  interpretation: string;
}

export function InterpretationPanel({ interpretation }: InterpretationPanelProps) {
  const t = useTranslations('reading');

  return (
    <motion.div
      className="frame-border relative w-full rounded-2xl bg-black/30 p-6 md:p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="gold-title relative z-[2] mb-4 shrink-0 text-center text-xl md:text-2xl">
        {t('interpretation')}
      </h2>
      <div className="oracle-scroll relative z-[2] max-h-[min(55vh,28rem)] overflow-y-auto overscroll-y-contain pr-1 sm:pr-2 md:max-h-[min(65vh,36rem)]">
        <p className="oracle-subtitle whitespace-pre-wrap text-left leading-relaxed">
          {interpretation}
        </p>
      </div>
    </motion.div>
  );
}
