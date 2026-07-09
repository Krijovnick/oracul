import type { Locale } from '../locales';
import type { Messages } from './types';
import en from './en';
import fr from './fr';
import es from './es';
import pt from './pt';
import de from './de';
import ru from './ru';

const allMessages: Record<Locale, Messages> = {
  en,
  fr,
  es,
  pt,
  de,
  ru,
};

export function getMessages(locale: Locale): Messages {
  return allMessages[locale];
}
