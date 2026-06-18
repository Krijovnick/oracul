'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { landingNavLinks } from '@/shared/config/routes';

export function LandingNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-end gap-8 px-8 py-6 md:px-14">
      {landingNavLinks.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`text-xs font-medium uppercase tracking-[0.2em] transition-colors ${
              isActive
                ? 'text-[var(--gold-mid)]'
                : 'text-white/80 hover:text-[var(--gold-mid)]'
            }`}
            aria-current={isActive ? 'page' : undefined}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
