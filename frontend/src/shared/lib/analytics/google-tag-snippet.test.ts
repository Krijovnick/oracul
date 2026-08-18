import { describe, expect, it } from 'vitest';
import { CONSENT_STORAGE_KEY, CONSENT_VALUE } from './consent';
import {
  getGoogleTagInlineScript,
  getGoogleTagScriptSrc,
} from './google-tag-snippet';

describe('google tag snippet', () => {
  it('sets consent defaults before config so coverage crawlers see a complete tag', () => {
    const script = getGoogleTagInlineScript('G-TESTID1');

    expect(script).toContain('function gtag(){dataLayer.push(arguments);}');
    expect(script).toContain('window.gtag = gtag');
    expect(script.indexOf("gtag('consent'")).toBeLessThan(script.indexOf("gtag('config'"));
    expect(script).toContain('analytics_storage');
    expect(script).toContain('ad_user_data');
    expect(script).toContain('G-TESTID1');
    expect(script).toContain(CONSENT_STORAGE_KEY);
    expect(script).toContain(CONSENT_VALUE);
  });

  it('points at the official gtag.js URL Tag Assistant looks for', () => {
    expect(getGoogleTagScriptSrc('G-TESTID1')).toBe(
      'https://www.googletagmanager.com/gtag/js?id=G-TESTID1',
    );
  });
});
