import { AnalyticsEvents, type AnalyticsEvent } from './events';
import { gaEvent } from './gtag';

type TrackParams = Record<string, string | number | boolean | null | undefined>;

let hawkSender: ((error: Error, context?: Record<string, unknown>) => void) | null = null;

export function registerHawkSender(
  sender: ((error: Error, context?: Record<string, unknown>) => void) | null,
) {
  hawkSender = sender;
}

export function trackEvent(event: AnalyticsEvent, params?: TrackParams) {
  gaEvent(event, params);
}

export function trackError(
  error: unknown,
  context?: {
    source?: string;
    [key: string]: string | number | boolean | null | undefined;
  },
) {
  const message =
    error instanceof Error
      ? error.message
      : typeof error === 'string'
        ? error
        : 'Unknown error';

  const { source, ...rest } = context ?? {};
  const params = {
    error_message: message.slice(0, 200),
    error_source: source ?? 'unknown',
    ...rest,
  };

  gaEvent(AnalyticsEvents.jsError, params);

  if (hawkSender) {
    const err = error instanceof Error ? error : new Error(message);
    hawkSender(err, context);
  }
}
