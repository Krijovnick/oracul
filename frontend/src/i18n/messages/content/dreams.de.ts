import type { DreamDictionaryMessages } from '../types';

export const dreamDictionaryMessages: Record<string, DreamDictionaryMessages> = {
  freudian: {
    title: 'Freudisch',
    description: 'Eine psychoanalytische Perspektive auf Symbole des Unbewussten.',
    features: 'Psychoanalytisch, Symbole des Unbewussten',
    about: [
      'Das freudische Traumlexikon betrachtet Träume als Weg zu verdrängten Wünschen, Ängsten und inneren Konflikten. Bilder im Traum sind verschlüsselte Botschaften der Psyche, die verbergen, was das Bewusstsein nicht bereit ist direkt anzunehmen.',
      'Symbole sind hier oft mit dem Körper, Macht, Sexualität, Kindheitserfahrungen und Abwehrmechanismen verbunden. Wichtig ist, nicht nur auf den Gegenstand des Traums zu schauen, sondern auch auf die Gefühle, die er auslöst.',
      'Die Deutung hilft, verborgene Beweggründe des Verhaltens zu erkennen und zu verstehen, welche inneren Prozesse gerade aktiv sind.',
    ],
    promptHint:
      'Beschreiben Sie Ihren Traum so ausführlich wie möglich: Ort, Menschen, Gegenstände, Emotionen und was am Ende geschah.',
  },
  jungian: {
    title: 'Jungianisch',
    description: 'Archetypen und die Sprache des kollektiven Unbewussten.',
    features: 'Archetypen, kollektives Unbewusstes',
    about: [
      'Der jungianische Ansatz sieht Träume als Dialog der Seele mit sich selbst. Träume sprechen eine archetypische Sprache — durch Bilder des Schattens, der Anima, des Animus, des Weisen, des Helden und anderer universeller Figuren.',
      'Ein Traum kann nicht nur persönliche Erfahrungen zeigen, sondern auch tiefe Muster, die ein Mensch auf dem Weg der Individuation — der Ganzwerdung — durchläuft.',
      'Besondere Aufmerksamkeit gilt wiederkehrenden Symbolen, Transformationen und der inneren Aufgabe, die der Traum zum Erkennen einlädt.',
    ],
    promptHint:
      'Erzählen Sie von Ihrem Traum: wer erschien, welche Bilder sich wiederholten, was sich veränderte und welches Gefühl nach dem Erwachen blieb.',
  },
  miller: {
    title: 'Miller',
    description: 'Ein klassisches vorausschauendes Traumlexikon.',
    features: 'Klassisches vorausschauendes Traumlexikon',
    about: [
      'Millers Traumlexikon ist einer der bekanntesten klassischen Deuter. Es verbindet Traumbilder mit Alltagsereignissen, Veränderungen, Begegnungen und Warnungen.',
      'Hier wird der Traum durch stabile volkstümliche und kulturelle Assoziationen gelesen: wovon man träumt, kann auf das hinweisen, was in naher Zukunft geschehen könnte.',
      'Die Deutung baut auf einer schrittweisen Analyse der Schlüsselsymbole und ihrer traditionellen Bedeutungen auf.',
    ],
    promptHint:
      'Beschreiben Sie Ihren Traum der Reihe nach: was Sie sahen, mit wem Sie interagierten und wie alles endete.',
  },
  vanga: {
    title: 'Wanga',
    description: 'Ein volkstümliches mystisches Traumlexikon mit vorausschauendem Ton.',
    features: 'Volkstümlich, mystisch, vorausschauend',
    about: [
      'Das Traumlexikon im Stil von Wanga liest Träume als Omen und Botschaften des Schicksals. Bilder tragen hier Warnung, Hoffnung oder ein Zeichen einer wichtigen Wendung.',
      'Lebhafte, beunruhigende oder ungewöhnlich strahlende Träume gelten als besonders bedeutsam.',
      'Die Deutung verbindet Volksweisheit, intuitives Gespür für Symbole und Aufmerksamkeit für die spirituelle Bedeutung des Geschehenen.',
    ],
    promptHint:
      'Beschreiben Sie Ihren Traum vollständig, notieren Sie die lebhaftesten Details und was Ihnen bedeutsam oder beunruhigend erschien.',
  },
  nostradamus: {
    title: 'Nostradamus',
    description: 'Eine prophetische und mystische Sicht auf Traumvisionen.',
    features: 'Prophetisch, mystisch',
    about: [
      'Das Traumlexikon im Stil von Nostradamus betrachtet Träume als prophetische Visionen. Symbole können auf bevorstehende Veränderungen, Prüfungen, Offenbarungen und verborgene Gesetzmäßigkeiten der Zeit hinweisen.',
      'Bilder werden oft allegorisch gelesen: Elemente, Himmelszeichen, Kriege, Kronen, Feuer und Wasser tragen eine Botschaft über das Schicksal eines Menschen oder seiner Angehörigen.',
      'Die Deutung baut auf der Suche nach verborgenem Sinn und einer prophetischen Gesamtschau auf.',
    ],
    promptHint:
      'Beschreiben Sie Ihren Traum als Vision: was geschah, welche Zeichen oder seltsamen Details Sie sich merken.',
  },
  loff: {
    title: 'Loff',
    description: 'Ein moderner psychologischer Ansatz zu Träumen.',
    features: 'Modern psychologisch',
    about: [
      'Loffs Traumlexikon geht davon aus, dass die Bedeutung eines Symbols von der persönlichen Erfahrung des Träumenden abhängt. Dasselbe Bild kann für verschiedene Menschen Unterschiedliches bedeuten.',
      'Hier sind Emotionen, Lebenskontext und die Assoziationen, die der Traum auslöst, entscheidend. Träume helfen, den gegenwärtigen inneren Zustand und unbewusste Reaktionen zu verstehen.',
      'Die Deutung verbindet sanft Traumbilder mit psychologischen Prozessen und der Lebenssituation.',
    ],
    promptHint:
      'Beschreiben Sie Ihren Traum und fügen Sie hinzu, welche Gefühle er in Ihnen weckte und was von dem Gesehenen Ihnen persönlich bedeutsam erscheint.',
  },
  esoteric: {
    title: 'Esoterisch',
    description: 'Symbolik, Numerologie und Elemente in der Traumdeutung.',
    features: 'Symbolik, Numerologie, Elemente',
    about: [
      'Das esoterische Traumlexikon liest Träume durch Symbole der Elemente, Zahlen, Farben sowie planetarischer und spiritueller Entsprechungen.',
      'Jedes Bild kann ein Schlüssel zum energetischen Zustand, inneren Gleichgewicht und verborgenen Schwingungen des Moments sein.',
      'Die Deutung verbindet Symbolik, Zahlzeichen und elementaren Sinn des Gesehenen.',
    ],
    promptHint:
      'Beschreiben Sie Ihren Traum und geben Sie Farben, Zahlen und Elemente (Feuer, Wasser, Erde, Luft) an, falls sie vorkamen.',
  },
  islamic: {
    title: 'Islamisch',
    description: 'Traditionelle islamische Traumdeutung.',
    features: 'Traditionell islamisch',
    about: [
      'Die islamische Traumdeutung unterscheidet spirituell bedeutsame Visionen, beunruhigende Träume und gewöhnlichen Schlaf. Ein Traum kann guten Rat, eine Warnung oder ein Spiegelbild des inneren Zustands tragen.',
      'Symbole werden durch moralische, spirituelle und weltliche Bedeutung gelesen, mit Respekt für die Tradition des ta\'bir al-ru\'ya.',
      'Die Deutung wird behutsam gegeben, ohne kategorische Urteile, mit Betonung auf Weisheit und Besinnung.',
    ],
    promptHint:
      'Beschreiben Sie Ihren Traum ausführlich: was Sie sahen, welche Gefühle Sie erlebten und was Ihnen am deutlichsten in Erinnerung geblieben ist.',
  },
  vedic: {
    title: 'Vedisch',
    description: 'Traumdeutung auf Grundlage vedischer Symbolik.',
    features: 'Auf vedischen Texten basierend',
    about: [
      'Der vedische Ansatz sieht Träume als Spiegel des Karmas, des inneren Bewusstseinszustands und einer spirituellen Lektion.',
      'Bilder können auf karmische Prozesse, Reinigung, Segen, Prüfung oder die Notwendigkeit innerer Disziplin hinweisen.',
      'Die Deutung stützt sich auf vedische Symbolik und die Suche nach tieferem Sinn des Gesehenen.',
    ],
    promptHint:
      'Beschreiben Sie Ihren Traum: Ort, Handlungen, Menschen, Tiere und helle oder dunkle Bilder, die Sie sahen.',
  },
  chinese: {
    title: 'Chinesisch',
    description: 'Traditionelle östliche Symbolik in Träumen.',
    features: 'Traditionelle östliche Symbolik',
    about: [
      'Das chinesische Traumlexikon liest Bilder durch traditionelle östliche Symbolik: Tiere, Elemente, Glückszyklen, Harmonie und Ungleichgewicht der Energien.',
      'Ein Traum kann auf günstige oder ungünstige Zeichen, Veränderungen im Schicksal, in der Familie, in Angelegenheiten und im inneren Gleichgewicht hinweisen.',
      'Die Deutung verbindet das Gesehene mit traditionellen Bedeutungen und einer Gesamtschau über das Zeichen des Traums.',
    ],
    promptHint:
      'Beschreiben Sie Ihren Traum: wer und was erschien, welche Gegenstände, Tiere oder Naturbilder Sie sich merken.',
  },
};
