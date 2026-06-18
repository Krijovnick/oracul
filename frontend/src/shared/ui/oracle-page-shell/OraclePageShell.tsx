import Image from 'next/image';

interface OraclePageShellProps {
  children: React.ReactNode;
}

export function OraclePageShell({ children }: OraclePageShellProps) {
  return (
    <div className="landing-page relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/moon-bg.png"
          alt=""
          fill
          priority
          className="object-cover opacity-[0.18]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(212,175,55,0.12)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_60%,rgba(180,130,40,0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </div>

      <div className="stars pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}
