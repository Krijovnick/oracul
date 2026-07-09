import type { SpreadMessages } from '../types';

export const spreadMessages: Record<string, SpreadMessages> = {
  'yes-no': {
    title: 'Réponse oui/non',
    description: 'Posez une question et recevez une réponse claire du destin — oui ou non.',
    positions: ['Réponse'],
    about: [
      'Le tirage oui/non est l\'un des moyens les plus anciens et les plus directs de consulter la sagesse du Tarot. Il est conçu pour les moments où l\'âme cherche la clarté : faut-il accepter, avancer, lâcher prise ou attendre.',
      'Dans ce tirage, une seule carte est tirée et devient la voix de l\'univers en réponse à votre question. Une carte à l\'endroit indique « oui » ou un issue favorable ; une carte renversée indique « non », un obstacle ou la nécessité de reconsidérer la situation.',
      'Les cartes de Tarot ne prononcent pas de verdicts rigides — elles reflètent l\'énergie du moment et aident à révéler les forces cachées qui influencent votre choix. Faites confiance à votre intuition et laissez les symboles vous parler.',
    ],
    promptHint:
      'Formulez une question à laquelle on peut répondre par « oui » ou « non ». Par exemple : « Dois-je accepter cette offre ? »',
  },
  'card-of-day': {
    title: 'Carte du jour',
    description: 'Découvrez quelle carte vous guidera aujourd\'hui et ce qu\'elle symbolise.',
    positions: ['Carte du jour'],
    about: [
      'Le tirage Carte du jour est un compagnon doux et sage pour chaque matin. Une seule carte révèle le thème principal, l\'ambiance et la leçon que l\'Univers vous a préparés pour cette journée.',
      'Ce tirage ne nécessite pas de questions complexes — il suffit de s\'accorder au jour et de laisser le jeu choisir le symbole qui sera votre guide. La carte peut avertir des défis, indiquer des opportunités ou rappeler votre force intérieure.',
      'La position à l\'endroit révèle la signification ouverte et active de l\'arcane. La position renversée révèle l\'ombre de la carte : ce qui demande attention, patience ou travail intérieur. Ensemble, elles créent une image complète de votre journée.',
    ],
    promptHint:
      'Décrivez ce qui vous préoccupe aujourd\'hui, ou posez une question sur la journée à venir. Par exemple : « Quelle énergie devrais-je cultiver aujourd\'hui ? »',
  },
  'three-cards': {
    title: 'Trois cartes',
    description: 'Passé, présent et futur — la chronologie de votre situation.',
    positions: ['Passé', 'Présent', 'Futur'],
    about: [
      'Le tirage classique à trois cartes révèle une chronologie : d\'où vous venez, où vous êtes maintenant et où vous vous dirigez.',
      'La première carte montre les racines de la situation et l\'expérience passée. La seconde révèle l\'énergie actuelle et les forces principales du moment. La troisième montre l\'évolution probable des événements si la trajectoire actuelle se maintient.',
      'Ce tirage convient à toute question sur l\'évolution d\'une situation dans le temps.',
    ],
    promptHint:
      'Posez une question sur l\'évolution de votre situation. Par exemple : « Comment va évoluer ma carrière ? »',
  },
  'celtic-cross': {
    title: 'Croix celtique',
    description: 'Une analyse approfondie de la situation — dix cartes pour une vision complète.',
    positions: [
      'Cœur de la situation',
      'Obstacle',
      'Objectif / Conscient',
      'Fondation / Subconscient',
      'Passé',
      'Avenir proche',
      'Vous-même',
      'Environnement',
      'Espoirs et craintes',
      'Issue',
    ],
    about: [
      'La Croix celtique est l\'un des tirages de Tarot les plus profonds et les plus anciens. Dix cartes révèlent la situation sous tous les angles : visible et caché, passé et futur, intérieur et extérieur.',
      'La croix centrale montre l\'essence et la dynamique de la situation, tandis que la colonne de droite révèle votre attitude, votre environnement et le pronostic final.',
      'Utilisez ce tirage lorsque vous avez besoin d\'une analyse complète d\'une situation de vie complexe.',
    ],
    promptHint:
      'Décrivez la situation que vous souhaitez explorer en profondeur. Par exemple : « Que dois-je savoir sur ma relation avec... ? »',
  },
  horseshoe: {
    title: 'Fer à cheval',
    description: 'Sept cartes — un pronostic pour l\'avenir proche.',
    positions: [
      'Passé',
      'Présent',
      'Avenir proche',
      'Votre approche',
      'Influences extérieures',
      'Obstacles',
      'Issue finale',
    ],
    about: [
      'Le tirage du Fer à cheval est disposé en forme de fer à cheval et offre une vue d\'ensemble sur l\'évolution de la situation à court terme.',
      'Sept positions révèlent successivement le chemin du passé à l\'issue, montrant les forces qui aident ou entravent.',
      'Idéal pour les questions sur les événements à venir et la prise de décision.',
    ],
    promptHint:
      'Interrogez-vous sur ce qui vous attend dans un avenir proche. Par exemple : « Comment se déroulera mon voyage la semaine prochaine ? »',
  },
  'relationship-pyramid': {
    title: 'Pyramide relationnelle',
    description: 'Six cartes — une analyse de la relation entre deux personnes.',
    positions: [
      'Vous',
      'Partenaire',
      'Lien entre vous',
      'Forces',
      'Faiblesses',
      'Perspectives',
    ],
    about: [
      'La Pyramide relationnelle explore la dynamique entre deux personnes — partenaires amoureux, amis, collègues ou proches.',
      'Le tirage révèle l\'énergie de chacun, la nature du lien, les forces et faiblesses de la relation, ainsi que son évolution possible.',
      'Posez une question sur la relation spécifique qui vous préoccupe.',
    ],
    promptHint:
      'Décrivez la relation que vous souhaitez explorer. Par exemple : « Quelles sont les perspectives de ma relation avec... ? »',
  },
  star: {
    title: "L'Étoile",
    description: 'Six cartes — chemin spirituel et croissance personnelle.',
    positions: [
      'Passé',
      'Présent',
      'Avenir proche',
      'Conseil',
      'Influences extérieures',
      'Issue',
    ],
    about: [
      "Le tirage de l'Étoile est axé sur la croissance spirituelle et la connaissance de soi. Six cartes sont disposées en forme d'étoile et éclairent votre chemin intérieur.",
      'Il aide à voir d\'où vous venez, où vous vous situez sur votre chemin de développement et quel conseil les cartes offrent pour votre croissance.',
      'Utilisez ce tirage pour les questions sur le développement personnel, la vocation et le chemin spirituel.',
    ],
    promptHint:
      'Interrogez-vous sur votre chemin spirituel ou votre croissance personnelle. Par exemple : « Que dois-je développer en moi maintenant ? »',
  },
  'tree-of-life': {
    title: 'Arbre de vie',
    description: 'Dix cartes — un tirage cabalistique sur toutes les sphères de la vie.',
    positions: [
      'Kether — Spiritualité',
      'Hokmah — Sagesse',
      'Binah — Compréhension',
      'Hesed — Miséricorde',
      'Geburah — Force',
      'Tiferet — Harmonie',
      'Netzah — Victoire',
      'Hod — Splendeur',
      'Yesod — Fondement',
      'Malkuth — Monde matériel',
    ],
    about: [
      "L'Arbre de vie est un tirage cabalistique fondé sur les dix sephiroth. Chaque carte correspond à une sphère de l'existence et révèle un aspect précis de votre vie.",
      'De la spiritualité la plus élevée (Kether) au monde matériel (Malkuth) — le tirage offre une vision holistique de tous les niveaux de votre être.',
      'Convient à une analyse profonde de soi et à la recherche d\'équilibre entre les différentes sphères de la vie.',
    ],
    promptHint:
      'Posez une question sur l\'équilibre et l\'harmonie dans votre vie. Par exemple : « Quelles sphères de ma vie demandent de l\'attention ? »',
  },
  year: {
    title: "Tirage de l'année",
    description: "Douze cartes — une pour chaque mois de l'année.",
    positions: [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre',
    ],
    about: [
      "Le tirage de l'année révèle l'énergie de chacun des douze mois. Chaque carte est une clé pour comprendre les thèmes principaux, les défis et les opportunités de cette période.",
      'Les cartes sont disposées en cercle, comme les mois sur un cadran, créant une carte complète de votre année.',
      "Posez une question sur l'année à venir, ou laissez simplement les cartes révéler l'image d'ensemble.",
    ],
    promptHint:
      "Interrogez-vous sur l'année à venir. Par exemple : « Comment sera cette année pour moi ? » ou « Sur quoi dois-je me concentrer dans les prochains mois ? »",
  },
  situation: {
    title: 'Tirage de situation',
    description: 'Trois cartes — une analyse de la situation actuelle.',
    positions: ['Cœur de la situation', 'Influence cachée', 'Conseil / Évolution'],
    about: [
      'Un tirage compact à trois cartes pour une analyse rapide mais riche de la situation actuelle.',
      'La première carte montre l\'essence de ce qui se passe, la seconde révèle les forces et facteurs cachés, et la troisième offre le conseil des cartes et l\'évolution probable.',
      'Idéal lorsque vous avez besoin de comprendre rapidement une situation précise.',
    ],
    promptHint:
      'Décrivez la situation que vous souhaitez analyser. Par exemple : « Que se passe-t-il dans ma situation professionnelle ? »',
  },
};
