import createMiddleware from 'next-intl/middleware';
import { NextRequest } from 'next/server';
import { resolveLocale } from './i18n/detect-locale';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const cookieLocale = request.cookies.get('oracle-locale')?.value;
  const country =
    request.headers.get('x-vercel-ip-country') ??
    request.headers.get('cf-ipcountry');

  if (!cookieLocale) {
    const detected = resolveLocale({
      acceptLanguage: request.headers.get('accept-language'),
      country,
    });

    const response = intlMiddleware(request);
    response.cookies.set('oracle-locale', detected, {
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
      sameSite: 'lax',
    });
    return response;
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
