import { useMessages } from 'next-intl';
import type { Messages } from '@/i18n/messages/types';

export function useAppMessages(): Messages {
  return useMessages() as Messages;
}
