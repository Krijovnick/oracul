import { spreadRoute } from './routes';
import type { SpreadMessages, Messages } from '@/i18n/messages/types';

export type SpreadId =
  | 'yes-no'
  | 'card-of-day'
  | 'three-cards'
  | 'celtic-cross'
  | 'horseshoe'
  | 'relationship-pyramid'
  | 'star'
  | 'tree-of-life'
  | 'year'
  | 'situation';

export interface Spread {
  id: SpreadId;
  title: string;
  description: string;
  imageSrc: string;
  href: string;
  cardCount: number;
  positions: string[];
  about: string[];
  promptHint: string;
}

interface SpreadDefinition {
  id: SpreadId;
  imageSrc: string;
  cardCount: number;
}

const spreadDefinitions: SpreadDefinition[] = [
  { id: 'yes-no', imageSrc: '/images/spread-yes-no.png', cardCount: 1 },
  { id: 'card-of-day', imageSrc: '/images/spread-card-of-day.png', cardCount: 1 },
  { id: 'three-cards', imageSrc: '/images/spread-three-cards.png', cardCount: 3 },
  { id: 'celtic-cross', imageSrc: '/images/spread-celtic-cross.png', cardCount: 10 },
  { id: 'horseshoe', imageSrc: '/images/spread-horseshoe.png', cardCount: 7 },
  { id: 'relationship-pyramid', imageSrc: '/images/spread-relationship-pyramid.png', cardCount: 6 },
  { id: 'star', imageSrc: '/images/spread-star.png', cardCount: 6 },
  { id: 'tree-of-life', imageSrc: '/images/spread-tree-of-life.png', cardCount: 10 },
  { id: 'year', imageSrc: '/images/spread-year.png', cardCount: 12 },
  { id: 'situation', imageSrc: '/images/spread-situation.png', cardCount: 3 },
];

function buildSpread(definition: SpreadDefinition, content: SpreadMessages): Spread {
  return {
    id: definition.id,
    imageSrc: definition.imageSrc,
    cardCount: definition.cardCount,
    href: spreadRoute(definition.id),
    title: content.title,
    description: content.description,
    positions: content.positions,
    about: content.about,
    promptHint: content.promptHint,
  };
}

export function getSpreads(messages: Messages): Spread[] {
  return spreadDefinitions.map((definition) =>
    buildSpread(definition, messages.spreads[definition.id]),
  );
}

export function getSpreadById(id: string, messages: Messages): Spread | undefined {
  const definition = spreadDefinitions.find((spread) => spread.id === id);
  if (!definition) return undefined;
  const content = messages.spreads[definition.id as SpreadId];
  if (!content) return undefined;
  return buildSpread(definition, content);
}

export const spreadIds = spreadDefinitions.map((spread) => spread.id);
