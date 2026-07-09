import { getMessages } from '@/i18n/messages';
import type { Locale } from '@/i18n/locales';
import type { SharedReading } from '@/features/share-reading/model/types';
import { buildPositionedCards } from '@/features/share-reading/lib/build-positioned-cards';
import { DrawnCardsGrid } from '@/features/tarot-reading/ui/DrawnCardsGrid';
import { getDreamDictionaryById } from '@/shared/config/dream-dictionaries';
import { getSpreadById } from '@/shared/config/spreads';
import { InterpretationPanel } from '@/shared/ui/interpretation-panel';
import { OracleLayout } from '@/widgets/oracle-layout';
import { PageTitle } from '@/shared/ui/page-title';

interface SharedReadingPageProps {
  share: SharedReading;
}

export function SharedReadingPage({ share }: SharedReadingPageProps) {
  const messages = getMessages(share.locale as Locale);

  if (share.type === 'tarot') {
    const spread = getSpreadById(share.payload.spreadId, messages);
    const cards = buildPositionedCards(share.payload.cards, messages);

    return (
      <OracleLayout>
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 py-16 md:py-24">
          <PageTitle>{spread?.title ?? messages.share.tarotFallbackTitle}</PageTitle>

          <div className="frame-border w-full rounded-2xl bg-black/30 p-6 md:p-8">
            <h2 className="gold-title mb-3 text-center text-lg md:text-xl">
              {messages.history.question}
            </h2>
            <p className="oracle-subtitle text-center leading-relaxed">{share.payload.question}</p>
          </div>

          <DrawnCardsGrid cards={cards} cardCount={cards.length} phase="result" />
          <InterpretationPanel interpretation={share.payload.interpretation} />
        </div>
      </OracleLayout>
    );
  }

  const dictionary = getDreamDictionaryById(share.payload.dictionaryId, messages);

  return (
    <OracleLayout>
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 py-16 md:py-24">
        <PageTitle>
          {dictionary?.title ?? messages.share.dreamFallbackTitle}
        </PageTitle>

        <div className="frame-border w-full rounded-2xl bg-black/30 p-6 md:p-8">
          <h2 className="gold-title mb-3 text-center text-lg md:text-xl">
            {messages.history.dreamDescription}
          </h2>
          <p className="oracle-subtitle whitespace-pre-wrap text-center leading-relaxed">
            {share.payload.description}
          </p>
        </div>

        <InterpretationPanel interpretation={share.payload.interpretation} />
      </div>
    </OracleLayout>
  );
}
