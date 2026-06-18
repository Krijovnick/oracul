import { routes } from './routes';

export interface Spread {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  href: string;
}

export const spreads: Spread[] = [
  {
    id: 'yes-no',
    title: 'Ответ да/нет',
    description: 'Задайте вопрос и получите ясный ответ судьбы — да или нет.',
    imageSrc: '/images/spread-yes-no.png',
    href: routes.spreads.yesNo,
  },
  {
    id: 'card-of-day',
    title: 'Карта дня',
    description: 'Узнайте, какая карта направит вас сегодня и что она символизирует.',
    imageSrc: '/images/spread-card-of-day.png',
    href: routes.spreads.cardOfDay,
  },
];

export function getSpreadById(id: string): Spread | undefined {
  return spreads.find((spread) => spread.id === id);
}
