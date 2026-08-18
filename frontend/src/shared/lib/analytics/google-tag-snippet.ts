import { CONSENT_STORAGE_KEY, CONSENT_VALUE } from './consent';

/**
 * Inline Google tag bootstrap. Must appear in the initial HTML so Tag Assistant
 * / GA coverage crawlers can detect the tag on every page. Consent Mode keeps
 * analytics cookies off until the user accepts.
 */
export function getGoogleTagInlineScript(measurementId: string): string {
  const id = JSON.stringify(measurementId);
  const storageKey = JSON.stringify(CONSENT_STORAGE_KEY);
  const accepted = JSON.stringify(CONSENT_VALUE);

  return `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  wait_for_update: 500
});
try {
  if (localStorage.getItem(${storageKey}) === ${accepted}) {
    gtag('consent', 'update', { analytics_storage: 'granted' });
  }
} catch (e) {}
gtag('js', new Date());
gtag('config', ${id}, { send_page_view: true, anonymize_ip: true });
`.trim();
}

export function getGoogleTagScriptSrc(measurementId: string): string {
  return `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
}
