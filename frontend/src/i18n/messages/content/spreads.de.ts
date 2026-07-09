import type { SpreadMessages } from '../types';

export const spreadMessages: Record<string, SpreadMessages> = {
  'yes-no': {
    title: 'Ja/Nein-Antwort',
    description: 'Stellen Sie eine Frage und erhalten Sie eine klare Antwort des Schicksals — ja oder nein.',
    positions: ['Antwort'],
    about: [
      'Die Ja/Nein-Legung ist eine der ältesten und direktesten Arten, die Weisheit des Tarot zu befragen. Sie ist für Momente gedacht, in denen die Seele nach Klarheit sucht: ob man zustimmen, voranschreiten, loslassen oder warten soll.',
      'In dieser Legung wird eine einzige Karte gezogen, die zur Stimme des Universums in Antwort auf Ihre Frage wird. Eine aufrechte Karte deutet auf «ja» oder ein günstiges Ergebnis hin; eine umgekehrte Karte auf «nein», ein Hindernis oder die Notwendigkeit, die Situation neu zu betrachten.',
      'Tarotkarten sprechen keine starren Urteile — sie spiegeln die Energie des Moments wider und helfen, die verborgenen Kräfte zu erkennen, die Ihre Wahl beeinflussen. Vertrauen Sie Ihrer Intuition und lassen Sie die Symbole zu Ihnen sprechen.',
    ],
    promptHint:
      'Formulieren Sie eine Frage, die mit «ja» oder «nein» beantwortet werden kann. Zum Beispiel: «Soll ich dieses Angebot annehmen?»',
  },
  'card-of-day': {
    title: 'Karte des Tages',
    description: 'Entdecken Sie, welche Karte Sie heute führen wird und was sie symbolisiert.',
    positions: ['Karte des Tages'],
    about: [
      'Die Legung Karte des Tages ist ein sanfter und weiser Begleiter für jeden Morgen. Eine einzige Karte enthüllt das Hauptthema, die Stimmung und die Lektion, die das Universum für Sie an diesem Tag bereithält.',
      'Diese Legung erfordert keine komplexen Fragen — es genügt, sich auf den Tag einzustimmen und dem Deck zu erlauben, das Symbol zu wählen, das Ihr Wegweiser sein wird. Die Karte kann vor Herausforderungen warnen, auf Möglichkeiten hinweisen oder Sie an Ihre innere Kraft erinnern.',
      'Die aufrechte Position offenbart die offene, aktive Bedeutung des Arkans. Die umgekehrte Position offenbart den Schatten der Karte: was Aufmerksamkeit, Geduld oder innere Arbeit erfordert. Zusammen ergeben sie ein vollständiges Bild Ihres Tages.',
    ],
    promptHint:
      'Beschreiben Sie, was Sie heute beschäftigt, oder stellen Sie eine Frage zum bevorstehenden Tag. Zum Beispiel: «Welche Energie sollte ich heute pflegen?»',
  },
  'three-cards': {
    title: 'Drei Karten',
    description: 'Vergangenheit, Gegenwart und Zukunft — die Zeitlinie Ihrer Situation.',
    positions: ['Vergangenheit', 'Gegenwart', 'Zukunft'],
    about: [
      'Die klassische Drei-Karten-Legung enthüllt eine Zeitlinie: woher Sie kommen, wo Sie jetzt stehen und wohin Sie sich bewegen.',
      'Die erste Karte zeigt die Wurzeln der Situation und vergangene Erfahrungen. Die zweite offenbart die gegenwärtige Energie und die Hauptkräfte des Moments. Die dritte zeigt den wahrscheinlichen Verlauf der Ereignisse, wenn der gegenwärtige Kurs beibehalten wird.',
      'Diese Legung eignet sich für jede Frage zur zeitlichen Entwicklung einer Situation.',
    ],
    promptHint:
      'Stellen Sie eine Frage zur Entwicklung Ihrer Situation. Zum Beispiel: «Wie wird sich meine Karriere entwickeln?»',
  },
  'celtic-cross': {
    title: 'Keltisches Kreuz',
    description: 'Eine eingehende Analyse der Situation — zehn Karten für das vollständige Bild.',
    positions: [
      'Kern der Angelegenheit',
      'Hindernis',
      'Ziel / Bewusstes',
      'Grundlage / Unterbewusstes',
      'Vergangenheit',
      'Nahe Zukunft',
      'Sie selbst',
      'Umfeld',
      'Hoffnungen und Ängste',
      'Ergebnis',
    ],
    about: [
      'Das Keltische Kreuz ist eine der tiefgründigsten und ältesten Tarot-Legungen. Zehn Karten enthüllen die Situation aus jedem Blickwinkel: Sichtbares und Verborgenes, Vergangenheit und Zukunft, Inneres und Äußeres.',
      'Das zentrale Kreuz zeigt das Wesen und die Dynamik der Situation, während die Säule rechts Ihre Haltung, Ihr Umfeld und die endgültige Prognose offenbart.',
      'Nutzen Sie diese Legung, wenn Sie eine umfassende Analyse einer komplexen Lebenssituation benötigen.',
    ],
    promptHint:
      'Beschreiben Sie die Situation, die Sie eingehend erforschen möchten. Zum Beispiel: «Was muss ich über meine Beziehung zu... wissen?»',
  },
  horseshoe: {
    title: 'Hufeisen',
    description: 'Sieben Karten — eine Prognose für die nahe Zukunft.',
    positions: [
      'Vergangenheit',
      'Gegenwart',
      'Nahe Zukunft',
      'Ihr Ansatz',
      'Äußere Einflüsse',
      'Hindernisse',
      'Endergebnis',
    ],
    about: [
      'Die Hufeisen-Legung ist in Form eines Hufeisens angeordnet und bietet einen umfassenden Blick auf die Entwicklung der Situation in naher Zukunft.',
      'Sieben Positionen enthüllen nacheinander den Weg von der Vergangenheit zum Ergebnis und zeigen die Kräfte, die helfen oder behindern.',
      'Ideal für Fragen zu bevorstehenden Ereignissen und Entscheidungen.',
    ],
    promptHint:
      'Fragen Sie, was Sie in naher Zukunft erwartet. Zum Beispiel: «Wie wird sich meine Reise nächste Woche entwickeln?»',
  },
  'relationship-pyramid': {
    title: 'Beziehungspyramide',
    description: 'Sechs Karten — eine Analyse der Beziehung zwischen zwei Menschen.',
    positions: [
      'Sie',
      'Partner',
      'Verbindung zwischen Ihnen',
      'Stärken',
      'Schwächen',
      'Aussichten',
    ],
    about: [
      'Die Beziehungspyramide erforscht die Dynamik zwischen zwei Menschen — romantischen Partnern, Freunden, Kollegen oder Verwandten.',
      'Die Legung zeigt die Energie jedes Einzelnen, die Natur der Verbindung, die Stärken und Schwächen der Beziehung sowie ihre mögliche Entwicklung.',
      'Stellen Sie eine Frage zu der konkreten Beziehung, die Sie beschäftigt.',
    ],
    promptHint:
      'Beschreiben Sie die Beziehung, die Sie erforschen möchten. Zum Beispiel: «Wie sind die Aussichten meiner Beziehung mit...?»',
  },
  star: {
    title: 'Der Stern',
    description: 'Sechs Karten — spiritueller Weg und persönliches Wachstum.',
    positions: [
      'Vergangenheit',
      'Gegenwart',
      'Nahe Zukunft',
      'Rat',
      'Äußere Einflüsse',
      'Ergebnis',
    ],
    about: [
      'Die Stern-Legung ist auf spirituelles Wachstum und Selbsterkenntnis ausgerichtet. Sechs Karten sind in Sternform angeordnet und erhellen Ihren inneren Weg.',
      'Sie hilft zu erkennen, woher Sie kommen, wo Sie sich auf Ihrem Entwicklungsweg befinden und welchen Rat die Karten für Ihr Wachstum bieten.',
      'Nutzen Sie diese Legung für Fragen zu Selbstentwicklung, Berufung und spirituellem Weg.',
    ],
    promptHint:
      'Fragen Sie nach Ihrem spirituellen Weg oder persönlichen Wachstum. Zum Beispiel: «Was muss ich jetzt in mir entwickeln?»',
  },
  'tree-of-life': {
    title: 'Lebensbaum',
    description: 'Zehn Karten — eine kabbalistische Legung über alle Lebensbereiche.',
    positions: [
      'Kether — Spiritualität',
      'Chokmah — Weisheit',
      'Binah — Verständnis',
      'Chesed — Barmherzigkeit',
      'Geburah — Stärke',
      'Tiferet — Harmonie',
      'Netzach — Sieg',
      'Hod — Herrlichkeit',
      'Yesod — Fundament',
      'Malkuth — Materielle Welt',
    ],
    about: [
      'Der Lebensbaum ist eine kabbalistische Legung, die auf den zehn Sephiroth basiert. Jede Karte entspricht einer Sphäre des Seins und offenbart einen bestimmten Aspekt Ihres Lebens.',
      'Von der höchsten Spiritualität (Kether) bis zur materiellen Welt (Malkuth) — die Legung bietet ein ganzheitliches Bild aller Ebenen Ihres Daseins.',
      'Geeignet für tiefe Selbstanalyse und die Suche nach Balance zwischen verschiedenen Lebensbereichen.',
    ],
    promptHint:
      'Stellen Sie eine Frage zu Balance und Harmonie in Ihrem Leben. Zum Beispiel: «Welche Bereiche meines Lebens brauchen Aufmerksamkeit?»',
  },
  year: {
    title: 'Jahreslegung',
    description: 'Zwölf Karten — eine für jeden Monat des Jahres.',
    positions: [
      'Januar',
      'Februar',
      'März',
      'April',
      'Mai',
      'Juni',
      'Juli',
      'August',
      'September',
      'Oktober',
      'November',
      'Dezember',
    ],
    about: [
      'Die Jahreslegung enthüllt die Energie jedes der zwölf Monate. Jede Karte ist ein Schlüssel zum Verständnis der Hauptthemen, Herausforderungen und Möglichkeiten dieses Zeitraums.',
      'Die Karten sind im Kreis angeordnet, wie Monate auf einem Zifferblatt, und schaffen eine vollständige Karte Ihres Jahres.',
      'Stellen Sie eine Frage zum bevorstehenden Jahr, oder lassen Sie einfach die Karten das Gesamtbild offenbaren.',
    ],
    promptHint:
      'Fragen Sie nach dem bevorstehenden Jahr. Zum Beispiel: «Wie wird dieses Jahr für mich sein?» oder «Worauf sollte ich in den kommenden Monaten achten?»',
  },
  situation: {
    title: 'Situationslegung',
    description: 'Drei Karten — eine Analyse der aktuellen Situation.',
    positions: ['Kern der Situation', 'Verborgener Einfluss', 'Rat / Entwicklung'],
    about: [
      'Eine kompakte Drei-Karten-Legung für eine schnelle, aber aussagekräftige Analyse der aktuellen Situation.',
      'Die erste Karte zeigt das Wesen des Geschehens, die zweite offenbart verborgene Kräfte und Faktoren, und die dritte bietet den Rat der Karten und die wahrscheinliche Entwicklung.',
      'Ideal, wenn Sie eine konkrete Situation schnell verstehen müssen.',
    ],
    promptHint:
      'Beschreiben Sie die Situation, die Sie analysieren möchten. Zum Beispiel: «Was geschieht in meiner beruflichen Situation?»',
  },
};
