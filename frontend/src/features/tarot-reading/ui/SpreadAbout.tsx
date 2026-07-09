interface SpreadAboutProps {
  paragraphs: string[];
}

export function SpreadAbout({ paragraphs }: SpreadAboutProps) {
  return (
    <div className="mb-10 w-full space-y-4 text-center">
      {paragraphs.map((paragraph, index) => (
        <p key={index} className="oracle-subtitle leading-relaxed">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
