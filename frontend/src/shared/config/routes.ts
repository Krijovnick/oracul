export const routes = {
  home: '/',
  tarot: '/tarot',
  dreams: '/dreams',
} as const;

export const navLinks = [
  { href: routes.home, label: 'Главная' },
  { href: routes.tarot, label: 'Таро' },
  { href: routes.dreams, label: 'Сны' },
] as const;

export const appNavLinks = [
  { href: routes.tarot, label: 'Таро' },
  { href: routes.dreams, label: 'Сны' },
] as const;
