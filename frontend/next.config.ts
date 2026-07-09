import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

import type { NextConfig } from 'next';
import fs from 'fs';
import path from 'path';

const rootDir = path.resolve(process.cwd(), '..');
const envFile = fs.readFileSync(path.join(rootDir, '.env'), 'utf8');
const port = envFile.match(/^PORT=(\d+)/m)?.[1];
const frontendUrl = envFile.match(/^FRONTEND_URL=(.+)/m)?.[1]?.trim();

if (!port) {
  throw new Error('PORT is not set in .env');
}

const apiUrl = `http://localhost:${port}`;
const siteUrl = frontendUrl ?? 'http://localhost:3001';

const nextConfig: NextConfig = {
  env: {
    FRONTEND_URL: siteUrl,
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${apiUrl}/api/:path*`,
      },
    ];
  },
  turbopack: {
    root: rootDir,
  },
};

export default withNextIntl(nextConfig);
