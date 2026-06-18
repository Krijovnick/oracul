import type { Metadata } from 'next';
import { Cormorant_Garamond, Geist, Geist_Mono } from 'next/font/google';
import { Header } from '@/widgets/header';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin', 'cyrillic'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const displayFont = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Твой Личный Оракул',
  description: 'Гадание на картах Таро и расшифровка снов',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50">
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
      </body>
    </html>
  );
}
