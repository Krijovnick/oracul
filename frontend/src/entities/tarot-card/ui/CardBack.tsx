interface CardBackProps {
  index: number;
  className?: string;
}

export function CardBack({ index, className = '' }: CardBackProps) {
  return (
    <div
      className={`card-back absolute h-64 w-44 rounded-xl border border-[#d4af37]/30 bg-gradient-to-br from-[#1a1408] to-[#0d0a04] shadow-lg md:h-80 md:w-52 ${className}`}
      style={{
        right: `${index * 18}px`,
        transform: `rotate(${8 + index * 5}deg)`,
        zIndex: index,
      }}
    />
  );
}
