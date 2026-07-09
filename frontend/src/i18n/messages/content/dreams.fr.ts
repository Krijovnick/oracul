import type { DreamDictionaryMessages } from '../types';

export const dreamDictionaryMessages: Record<string, DreamDictionaryMessages> = {
  freudian: {
    title: 'Freudien',
    description: 'Un regard psychanalytique sur les symboles de l\'inconscient.',
    features: 'Psychanalytique, symboles de l\'inconscient',
    about: [
      'Le dictionnaire freudien considère le rêve comme un chemin vers les désirs refoulés, les peurs et les conflits intérieurs. Les images du rêve sont des messages chiffrés de la psyché, dissimulant ce que la conscience n\'est pas prête à accepter directement.',
      'Les symboles sont souvent liés au corps, au pouvoir, à la sexualité, aux expériences de l\'enfance et aux mécanismes de défense. Il importe de regarder non seulement l\'objet du rêve, mais aussi les sentiments qu\'il suscite.',
      'L\'interprétation aide à révéler les motivations cachées du comportement et à comprendre quels processus intérieurs sont actuellement en jeu.',
    ],
    promptHint:
      'Décrivez votre rêve le plus en détail possible : lieu, personnes, objets, émotions et ce qui s\'est passé à la fin.',
  },
  jungian: {
    title: 'Jungien',
    description: "Archétypes et langage de l'inconscient collectif.",
    features: 'Archétypes, inconscient collectif',
    about: [
      "L'approche jungienne voit le rêve comme un dialogue de l'âme avec elle-même. Les rêves parlent un langage archétypal — à travers les images de l'Ombre, de l'Anima, de l'Animus, du Sage, du Héros et d'autres figures universelles.",
      "Un rêve peut révéler non seulement des expériences personnelles, mais aussi des schémas profonds que l'on traverse sur le chemin de l'individuation — devenir un être entier.",
      "Une attention particulière est portée aux symboles récurrents, aux transformations et à la tâche intérieure que le rêve invite à reconnaître.",
    ],
    promptHint:
      'Racontez votre rêve : qui est apparu, quelles images se sont répétées, ce qui a changé et quel sentiment est resté au réveil.',
  },
  miller: {
    title: 'Miller',
    description: 'Un dictionnaire classique des rêves à visée prédictive.',
    features: 'Dictionnaire classique prédictif',
    about: [
      "Le dictionnaire de Miller est l'un des interprètes classiques les plus connus. Il relie les images du rêve aux événements du quotidien, aux changements, aux rencontres et aux avertissements.",
      'Ici, le rêve se lit à travers des associations populaires et culturelles stables : ce que l\'on rêve peut indiquer ce qui pourrait se produire prochainement.',
      'L\'interprétation repose sur une analyse successive des symboles clés et de leurs significations traditionnelles.',
    ],
    promptHint:
      'Décrivez votre rêve dans l\'ordre : ce que vous avez vu, avec qui vous avez interagi et comment tout s\'est terminé.',
  },
  vanga: {
    title: 'Vanga',
    description: 'Un dictionnaire populaire et mystique des rêves à tonalité prédictive.',
    features: 'Populaire, mystique, prédictif',
    about: [
      'Le dictionnaire dans l\'esprit de Vanga lit les rêves comme des présages et des messages du destin. Les images portent ici un avertissement, un espoir ou un signe d\'un tournant important.',
      'Les rêves vifs, inquiétants ou d\'une luminosité inhabituelle sont considérés comme particulièrement significatifs.',
      'L\'interprétation combine la sagesse populaire, le ressenti intuitif des symboles et l\'attention au sens spirituel de ce qui s\'est passé.',
    ],
    promptHint:
      'Décrivez votre rêve dans son intégralité, en notant les détails les plus marquants et ce qui vous a semblé significatif ou troublant.',
  },
  nostradamus: {
    title: 'Nostradamus',
    description: 'Une vision prophétique et mystique des songes.',
    features: 'Prophétique, mystique',
    about: [
      'Le dictionnaire dans l\'esprit de Nostradamus considère le rêve comme une vision prophétique. Les symboles peuvent indiquer des changements à venir, des épreuves, des révélations et des lois cachées du temps.',
      'Les images sont souvent lues de manière allégorique : éléments, signes célestes, guerres, couronnes, feu et eau portent un message sur le destin d\'une personne ou de ses proches.',
      'L\'interprétation repose sur la recherche d\'un sens caché et d\'une conclusion prophétique d\'ensemble.',
    ],
    promptHint:
      'Décrivez votre rêve comme une vision : ce qui s\'est passé, quels signes ou détails étranges vous avez retenus.',
  },
  loff: {
    title: 'Loff',
    description: 'Une approche psychologique moderne des rêves.',
    features: 'Psychologique moderne',
    about: [
      'Le dictionnaire de Loff part du principe que la signification d\'un symbole dépend de l\'expérience personnelle du rêveur. Une même image peut signifier des choses différentes pour des personnes différentes.',
      'Ici, les émotions, le contexte de vie et les associations suscitées par le rêve sont essentiels. Le rêve aide à comprendre l\'état intérieur actuel et les réactions inconscientes.',
      'L\'interprétation relie doucement les images du rêve aux processus psychologiques et à la situation de vie.',
    ],
    promptHint:
      'Décrivez votre rêve et ajoutez quels sentiments il a suscités et ce qui, dans ce que vous avez vu, vous semble personnellement significatif.',
  },
  esoteric: {
    title: 'Ésotérique',
    description: 'Symbolisme, numérologie et éléments dans l\'interprétation des rêves.',
    features: 'Symbolisme, numérologie, éléments',
    about: [
      'Le dictionnaire ésotérique lit les rêves à travers les symboles des éléments, des nombres, des couleurs et des correspondances planétaires et spirituelles.',
      'Chaque image peut être une clé de l\'état énergétique, de l\'équilibre intérieur et des vibrations cachées du moment.',
      'L\'interprétation relie symbolisme, signes numériques et sens élémentaire de ce qui a été vu.',
    ],
    promptHint:
      'Décrivez votre rêve en indiquant les couleurs, les nombres et les éléments (feu, eau, terre, air) s\'ils étaient présents.',
  },
  islamic: {
    title: 'Islamique',
    description: 'Interprétation traditionnelle islamique des rêves.',
    features: 'Tradition islamique',
    about: [
      'La tradition islamique de l\'interprétation des rêves distingue les visions spirituellement significatives, les songes troublants et le sommeil ordinaire. Un rêve peut porter un bon conseil, un avertissement ou le reflet d\'un état intérieur.',
      'Les symboles se lisent à travers un sens moral, spirituel et quotidien, dans le respect de la tradition du ta\'bir al-ru\'ya.',
      'L\'interprétation est donnée avec douceur, sans verdicts catégoriques, en mettant l\'accent sur la sagesse et la réflexion.',
    ],
    promptHint:
      'Décrivez votre rêve en détail : ce que vous avez vu, les sentiments éprouvés et ce dont vous vous souvenez le plus vivement.',
  },
  vedic: {
    title: 'Védique',
    description: 'Interprétation des rêves fondée sur la symbolique védique.',
    features: 'Fondé sur les textes védiques',
    about: [
      'L\'approche védique voit le rêve comme le reflet du karma, de l\'état intérieur de la conscience et d\'une leçon spirituelle.',
      'Les images peuvent indiquer des processus karmiques, la purification, la bénédiction, l\'épreuve ou la nécessité d\'une discipline intérieure.',
      'L\'interprétation s\'appuie sur la symbolique védique et la recherche du sens profond de ce qui a été vu.',
    ],
    promptHint:
      'Décrivez votre rêve : lieu, actions, personnes, animaux, images lumineuses ou sombres que vous avez vues.',
  },
  chinese: {
    title: 'Chinois',
    description: 'Symbolisme oriental traditionnel dans les rêves.',
    features: 'Symbolisme oriental traditionnel',
    about: [
      'Le dictionnaire chinois lit les images à travers la symbolique orientale traditionnelle : animaux, éléments, cycles de fortune, harmonie et déséquilibre des énergies.',
      'Un rêve peut indiquer des signes favorables ou défavorables, des changements de destin, de famille, d\'affaires et d\'équilibre intérieur.',
      'L\'interprétation relie ce qui a été vu aux significations traditionnelles et à une conclusion générale sur le signe du rêve.',
    ],
    promptHint:
      'Décrivez votre rêve : qui et quoi est apparu, quels objets, animaux ou images naturelles vous avez retenus.',
  },
};
