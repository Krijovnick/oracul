'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

const revealVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export function HomeSections() {
  const t = useTranslations('home');

  const sections = [
    {
      title: t('tarotTitle'),
      description: t('tarotDescription'),
      imageSrc: '/images/home-tarot.png',
      imageAlt: t('tarotImageAlt'),
      href: '/tarot',
      buttonLabel: t('tarotButton'),
    },
    {
      title: t('dreamsTitle'),
      description: t('dreamsDescription'),
      imageSrc: '/images/home-dreams.png',
      imageAlt: t('dreamsImageAlt'),
      href: '/dreams',
      buttonLabel: t('dreamsButton'),
    },
  ] as const;

  return (
    <section className="mx-auto max-w-5xl px-6 pb-24 pt-4 md:px-14">
      <ul className="flex list-none flex-col gap-16 md:gap-20">
        {sections.map((section, index) => {
          const imageFirst = index % 2 === 0;

          return (
            <motion.li
              key={section.href}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={revealVariants}
              transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.1 }}
            >
              <article
                className={`flex flex-col items-center gap-8 md:gap-12 ${
                  imageFirst ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="frame-border relative w-full max-w-xs shrink-0 overflow-hidden rounded-2xl sm:max-w-sm">
                  <Image
                    src={section.imageSrc}
                    alt={section.imageAlt}
                    width={400}
                    height={500}
                    className="aspect-[4/5] w-full object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>

                <div
                  className={`flex flex-col items-center text-center ${
                    imageFirst ? 'md:items-start md:text-left' : 'md:items-end md:text-right'
                  }`}
                >
                  <h2 className="gold-title mb-4 text-3xl sm:text-4xl">{section.title}</h2>
                  <p className="oracle-subtitle mb-8 max-w-md">{section.description}</p>
                  <Link href={section.href} className="gold-button">
                    {section.buttonLabel}
                  </Link>
                </div>
              </article>
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
