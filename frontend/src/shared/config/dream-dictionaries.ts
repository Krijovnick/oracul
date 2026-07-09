import { dreamDictionaryRoute } from './routes';
import type { DreamDictionaryMessages, Messages } from '@/i18n/messages/types';

export type DreamDictionaryId =
  | 'freudian'
  | 'jungian'
  | 'miller'
  | 'vanga'
  | 'nostradamus'
  | 'loff'
  | 'esoteric'
  | 'islamic'
  | 'vedic'
  | 'chinese';

export interface DreamDictionary {
  id: DreamDictionaryId;
  title: string;
  description: string;
  features: string;
  href: string;
  about: string[];
  promptHint: string;
}

interface DreamDictionaryDefinition {
  id: DreamDictionaryId;
}

const dreamDictionaryDefinitions: DreamDictionaryDefinition[] = [
  { id: 'freudian' },
  { id: 'jungian' },
  { id: 'miller' },
  { id: 'vanga' },
  { id: 'nostradamus' },
  { id: 'loff' },
  { id: 'esoteric' },
  { id: 'islamic' },
  { id: 'vedic' },
  { id: 'chinese' },
];

function buildDreamDictionary(
  definition: DreamDictionaryDefinition,
  content: DreamDictionaryMessages,
): DreamDictionary {
  return {
    id: definition.id,
    href: dreamDictionaryRoute(definition.id),
    title: content.title,
    description: content.description,
    features: content.features,
    about: content.about,
    promptHint: content.promptHint,
  };
}

export function getDreamDictionaries(messages: Messages): DreamDictionary[] {
  return dreamDictionaryDefinitions.map((definition) =>
    buildDreamDictionary(definition, messages.dreamDictionaries[definition.id]),
  );
}

export function getDreamDictionaryById(
  id: string,
  messages: Messages,
): DreamDictionary | undefined {
  const definition = dreamDictionaryDefinitions.find((dictionary) => dictionary.id === id);
  if (!definition) return undefined;
  const content = messages.dreamDictionaries[definition.id];
  if (!content) return undefined;
  return buildDreamDictionary(definition, content);
}

export const dreamDictionaryIds = dreamDictionaryDefinitions.map((dictionary) => dictionary.id);
