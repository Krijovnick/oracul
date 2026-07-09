import type { MetadataRoute } from 'next';
import { getSiteUrlFromEnv } from '@/shared/config/site';

export default function robots(): MetadataRoute.Robots {
  const base = getSiteUrlFromEnv();

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/history', '/*/history'],
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
