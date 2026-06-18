'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { appNavLinks, routes } from '@/shared/config/routes';

export function Header() {
  const pathname = usePathname();
  const isLanding = pathname === routes.home;

  if (isLanding) {
    return null;
  }

  return (
    <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
        <Link
          href={routes.home}
          className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
        >
          Твой Личный Оракул
        </Link>
        <nav className="flex gap-6">
          {appNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
