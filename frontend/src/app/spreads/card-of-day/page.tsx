import { notFound } from 'next/navigation';
import { getSpreadById } from '@/shared/config/spreads';
import { SpreadPlaceholderPage } from '@/screens/spread';

export default function Page() {
  const spread = getSpreadById('card-of-day');
  if (!spread) notFound();

  return <SpreadPlaceholderPage title={spread.title} />;
}
