export const routes = {
  home: '/',
  tarot: '/tarot',
  dreams: '/dreams',
  history: '/history',
} as const;

export function spreadRoute(id: string): string {
  return `/spreads/${id}`;
}

export function dreamDictionaryRoute(id: string): string {
  return `/dreams/${id}`;
}

export function shareRoute(id: string): string {
  return `/share/${id}`;
}
