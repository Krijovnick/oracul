import type { Locale } from '@/i18n/locales';
import type { DreamDictionaryId } from '@/shared/config/dream-dictionaries';

export interface InterpretDreamRequest {
  dictionaryId: DreamDictionaryId;
  description: string;
  locale: Locale;
}

export interface InterpretDreamResponse {
  interpretation: string;
}

export async function interpretDream(
  payload: InterpretDreamRequest,
  signal?: AbortSignal,
): Promise<InterpretDreamResponse> {
  const response = await fetch('/api/dreams/interpret', {
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
