import { describe, expect, it } from 'vitest';
import { getSpreadById, getSpreads } from '@/shared/config/spreads';
import { spreadRoute } from '@/shared/config/routes';
import en from '@/i18n/messages/en';

describe('spreads config', () => {
  const spreads = getSpreads(en);

  it('has positions matching cardCount for every spread', () => {
    for (const spread of spreads) {
      expect(spread.positions).toHaveLength(spread.cardCount);
    }
  });

  it('generates href from spread id', () => {
    for (const spread of spreads) {
      expect(spread.href).toBe(spreadRoute(spread.id));
    }
  });

  it('finds spreads by id', () => {
    expect(getSpreadById('yes-no', en)?.title).toBe('Yes/No Answer');
    expect(getSpreadById('unknown', en)).toBeUndefined();
  });
});
