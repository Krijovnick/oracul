import type { SharedReading } from '@/features/share-reading/model/types';
import { getSpreadById } from '@/shared/config/spreads';
import { getDreamDictionaryById } from '@/shared/config/dream-dictionaries';
import type { Messages } from '@/i18n/messages/types';

const DREAM_OG_IMAGE = '/images/home-dreams.png';

export function getShareOgImage(share: SharedReading, messages: Messages): string {
  if (share.type === 'tarot') {
    const spread = getSpreadById(share.payload.spreadId, messages);
    return spread?.imageSrc ?? '/images/spread-three-cards.png';
  }

  return DREAM_OG_IMAGE;
}

export function getShareTitle(share: SharedReading, messages: Messages): string {
  if (share.type === 'tarot') {
    const spread = getSpreadById(share.payload.spreadId, messages);
    return spread?.title ?? messages.share.tarotFallbackTitle;
  }

  const dictionary = getDreamDictionaryById(share.payload.dictionaryId, messages);
  return dictionary?.title ?? messages.share.dreamFallbackTitle;
}

export function getShareDescription(share: SharedReading): string {
  const text = share.payload.interpretation.replace(/\s+/g, ' ').trim();
  if (text.length <= 200) {
    return text;
  }

  return `${text.slice(0, 197)}...`;
}
