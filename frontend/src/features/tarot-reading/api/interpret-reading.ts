import type { Locale } from '@/i18n/locales';
import type { SpreadId } from '@/shared/config/spreads';

export interface ReadingCard {
  position: string;
  cardName: string;
  reversed: boolean;
}

export interface InterpretReadingRequest {
  spreadId: SpreadId;
  question: string;
  locale: Locale;
  cards: ReadingCard[];
}

export interface InterpretReadingResponse {
  interpretation: string;
}

export async function interpretReading(
  payload: InterpretReadingRequest,
  signal?: AbortSignal,
): Promise<InterpretReadingResponse> {
  const response = await fetch('/api/tarot/interpret', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    signal,
  });

  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    const message =
      typeof body.message === 'string'
        ? body.message
        : 'Unable to get an interpretation. Please try again later.';
    throw new Error(message);
  }

  return response.json();
}
