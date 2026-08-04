/** Custom GA4 event names (visible in Events / Explorations). */
export const AnalyticsEvents = {
  homeTarotCta: 'home_tarot_cta',
  homeDreamsCta: 'home_dreams_cta',
  tarotDraw: 'tarot_draw',
  tarotSuccess: 'tarot_success',
  tarotError: 'tarot_error',
  tarotReset: 'tarot_reset',
  dreamInterpret: 'dream_interpret',
  dreamSuccess: 'dream_success',
  dreamError: 'dream_error',
  dreamReset: 'dream_reset',
  shareOpen: 'share_open',
  shareCopy: 'share_copy',
  shareError: 'share_error',
  historyClearAll: 'history_clear_all',
  historyDelete: 'history_delete',
  jsError: 'js_error',
} as const;

export type AnalyticsEvent = (typeof AnalyticsEvents)[keyof typeof AnalyticsEvents];
