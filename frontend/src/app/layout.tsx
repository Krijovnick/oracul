import type { Metadata } from 'next';
import { getSiteUrlFromEnv } from '@/shared/config/site';

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrlFromEnv()),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
