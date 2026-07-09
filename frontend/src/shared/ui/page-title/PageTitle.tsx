interface PageTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function PageTitle({ children, className = '' }: PageTitleProps) {
  return (
    <h1
      className={`gold-title mb-8 text-center text-4xl sm:text-5xl md:text-6xl ${className}`}
    >
      {children}
    </h1>
  );
}
