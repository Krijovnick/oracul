function normalizeSiteUrl(value: string): string {
  const trimmed = value.trim().replace(/\/+$/, '');

  if (!trimmed) {
    return 'http://localhost:3001';
  }

  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }

  return `https://${trimmed}`;
}

export function getSiteUrlFromEnv(): string {
  const raw =
    process.env.FRONTEND_URL ??
    process.env.NEXT_PUBLIC_SITE_URL ??
    'http://localhost:3001';

  return normalizeSiteUrl(raw);
}

export function getContactEmail(): string | undefined {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
  return email || undefined;
}

export async function getSiteUrl(): Promise<string> {
  const { headers } = await import('next/headers');
  const headerStore = await headers();
  const host = headerStore.get('host');
  const protocol = headerStore.get('x-forwarded-proto') ?? 'http';

  if (host) {
    return `${protocol}://${host}`;
  }

  return getSiteUrlFromEnv();
}

export function getSharePath(shareId: string, locale: string): string {
  return locale === 'en' ? `/share/${shareId}` : `/${locale}/share/${shareId}`;
}

export function getShareUrl(shareId: string, locale: string, origin?: string): string {
  const base = origin ? normalizeSiteUrl(origin) : getSiteUrlFromEnv();
  return `${base}${getSharePath(shareId, locale)}`;
}
