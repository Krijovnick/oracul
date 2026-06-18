import { SpreadCard } from '@/entities/spread';
import { spreads } from '@/shared/config/spreads';

export function SpreadsList() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-4 md:px-14">
      <h2 className="gold-title mb-12 text-center text-3xl sm:text-4xl">Расклады</h2>

      <ul className="grid list-none gap-16 sm:grid-cols-2 sm:gap-12">
        {spreads.map((spread) => (
          <li key={spread.id}>
            <SpreadCard
              imageSrc={spread.imageSrc}
              imageAlt={spread.title}
              title={spread.title}
              description={spread.description}
              href={spread.href}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
