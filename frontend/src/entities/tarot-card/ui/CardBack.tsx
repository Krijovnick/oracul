interface CardBackProps {
  index: number;
  className?: string;
  fill?: boolean;
}

export function CardBack({ index, className = '', fill = false }: CardBackProps) {
  const sizeClasses = fill
    ? 'aspect-[11/16] h-full w-auto'
    : 'h-64 w-44 md:h-80 md:w-52';

  return (
    <div
      className={`card-back absolute rounded-xl border border-[var(--gold-mid)]/30 bg-gradient-to-br from-[#1a1408] to-[#0d0a04] shadow-lg ${sizeClasses} ${className}`}
      style={{
        right: fill ? `${index * 4.5}%` : `${index * 18}px`,
        transform: `rotate(${8 + index * 5}deg)`,
        zIndex: index,
      }}
    />
  );
}
