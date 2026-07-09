import { describe, expect, it } from 'vitest';
import { isNavLinkActive } from '@/shared/lib/nav';

describe('isNavLinkActive', () => {
  it('matches home only on exact path', () => {
    expect(isNavLinkActive('/', '/')).toBe(true);
    expect(isNavLinkActive('/tarot', '/')).toBe(false);
  });

  it('highlights tarot section for spread pages', () => {
    expect(isNavLinkActive('/tarot', '/tarot')).toBe(true);
    expect(isNavLinkActive('/spreads/yes-no', '/tarot')).toBe(true);
    expect(isNavLinkActive('/spreads/celtic-cross', '/tarot')).toBe(true);
  });

  it('matches dreams and nested paths', () => {
    expect(isNavLinkActive('/dreams', '/dreams')).toBe(true);
    expect(isNavLinkActive('/dreams/symbols', '/dreams')).toBe(true);
    expect(isNavLinkActive('/tarot', '/dreams')).toBe(false);
  });

  it('matches history only on exact path', () => {
    expect(isNavLinkActive('/history', '/history')).toBe(true);
    expect(isNavLinkActive('/tarot', '/history')).toBe(false);
  });
});
