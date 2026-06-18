export const routes = {
  home: '/',
  dreams: '/dreams',
  spreads: {
    yesNo: '/spreads/yes-no',
    cardOfDay: '/spreads/card-of-day',
  },
} as const;

export const landingNavLinks = [
  { href: routes.home, label: 'Таро' },
  { href: routes.dreams, label: 'Сны' },
] as const;
