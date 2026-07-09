import { afterEach, describe, expect, it, vi } from 'vitest';
import { interpretReading } from './interpret-reading';

describe('interpretReading', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns interpretation on success', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ interpretation: 'Test interpretation' }),
      }),
    );

    const result = await interpretReading({
      spreadId: 'yes-no',
      question: 'Should I?',
      locale: 'en',
      cards: [{ position: 'Answer', cardName: 'The Fool', reversed: false }],
    });

    expect(result.interpretation).toBe('Test interpretation');
  });

  it('throws with server message on error response', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: false,
        json: async () => ({ message: 'Service unavailable' }),
      }),
    );

    await expect(
      interpretReading({
        spreadId: 'yes-no',
        question: 'Should I?',
        locale: 'en',
        cards: [{ position: 'Answer', cardName: 'The Fool', reversed: false }],
      }),
    ).rejects.toThrow('Service unavailable');
  });

  it('throws default message when error body is invalid', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: false,
        json: async () => {
          throw new Error('invalid json');
        },
      }),
    );

    await expect(
      interpretReading({
        spreadId: 'yes-no',
        question: 'Should I?',
        locale: 'en',
        cards: [{ position: 'Answer', cardName: 'The Fool', reversed: false }],
      }),
    ).rejects.toThrow('Unable to get an interpretation');
  });
});
