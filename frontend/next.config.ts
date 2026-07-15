import { config as loadEnv } from 'dotenv';
import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';
import fs from 'fs';
import path from 'path';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const rootDir = path.resolve(process.cwd(), '..');
const rootEnvPath = path.join(rootDir, '.env');
const localEnvPath = path.join(process.cwd(), '.env.local');

if (fs.existsSync(rootEnvPath)) {
  loadEnv({ path: rootEnvPath });
}
if (fs.existsSync(localEnvPath)) {
  loadEnv({ path: localEnvPath });
}

const backendPort = process.env.PORT ?? '3003';
const backendUrl = process.env.BACKEND_URL ?? `http://localhost:${backendPort}`;
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.FRONTEND_URL ??
  'http://localhost:3001';
const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();

const nextConfig: NextConfig = {
  env: {
    FRONTEND_URL: siteUrl,
    NEXT_PUBLIC_SITE_URL: siteUrl,
    BACKEND_URL: backendUrl,
    ...(contactEmail ? { NEXT_PUBLIC_CONTACT_EMAIL: contactEmail } : {}),
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${backendUrl}/api/:path*`,
      },
    ];
  },
  ...(process.env.NODE_ENV !== 'production' && fs.existsSync(path.join(rootDir, 'package.json'))
    ? { turbopack: { root: rootDir } }
    : {}),
};

export default withNextIntl(nextConfig);
