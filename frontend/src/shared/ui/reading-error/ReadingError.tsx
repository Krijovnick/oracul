'use client';

import { motion } from 'motion/react';

interface ReadingErrorProps {
  message: string;
}

export function ReadingError({ message }: ReadingErrorProps) {
  return (
    <motion.div
      className="w-full rounded-xl border border-red-500/30 bg-red-950/20 p-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <p className="text-sm text-red-300">{message}</p>
    </motion.div>
  );
}
