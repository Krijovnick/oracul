'use client';

import { useEffect } from 'react';
import { getHawkToken } from './config';
import { AnalyticsEvents } from './events';
import { registerHawkSender } from './track';
import { gaEvent } from './gtag';

type HawkInstance = {
  send: (error: Error, context?: Record<string, unknown>) => void;
};

function reportJsErrorToGa(
  error: unknown,
  context: Record<string, string | number | boolean | null | undefined>,
) {
  const message =
    error instanceof Error
      ? error.message
      : typeof error === 'string'
        ? error
        : 'Unknown error';

  gaEvent(AnalyticsEvents.jsError, {
    message: message.slice(0, 200),
    ...context,
  });
}

export function HawkInit() {
  const token = getHawkToken();

  useEffect(() => {
    let cancelled = false;
    let hawk: HawkInstance | null = null;

    async function initHawk() {
      if (!token) return;

      try {
        const { default: HawkCatcher } = await import('@hawk.so/browser');
        if (cancelled) return;

        hawk = new HawkCatcher({
          token,
          consoleTracking: false,
        }) as HawkInstance;

        registerHawkSender((error, context) => {
          hawk?.send(error, context);
        });
      } catch (error) {
        console.warn('[analytics] Hawk failed to initialize', error);
      }
    }

    void initHawk();

    // Mirror uncaught errors into GA custom events.
    // Hawk (if configured) already auto-captures the same failures.
    const onWindowError = (event: ErrorEvent) => {
      reportJsErrorToGa(event.error ?? event.message, {
        source: 'window.onerror',
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
      });
    };

    const onUnhandledRejection = (event: PromiseRejectionEvent) => {
      reportJsErrorToGa(event.reason, { source: 'unhandledrejection' });
    };

    window.addEventListener('error', onWindowError);
    window.addEventListener('unhandledrejection', onUnhandledRejection);

    return () => {
      cancelled = true;
      registerHawkSender(null);
      window.removeEventListener('error', onWindowError);
      window.removeEventListener('unhandledrejection', onUnhandledRejection);
    };
  }, [token]);

  return null;
}
