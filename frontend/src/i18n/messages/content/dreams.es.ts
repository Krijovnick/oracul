import type { DreamDictionaryMessages } from '../types';

export const dreamDictionaryMessages: Record<string, DreamDictionaryMessages> = {
  freudian: {
    title: 'Freudiano',
    description: 'Una perspectiva psicoanalítica sobre los símbolos del inconsciente.',
    features: 'Psicoanalítico, símbolos del inconsciente',
    about: [
      'El diccionario freudiano considera el sueño como un camino hacia los deseos reprimidos, los miedos y los conflictos internos. Las imágenes del sueño son mensajes cifrados de la psique que ocultan lo que la conciencia no está dispuesta a aceptar directamente.',
      'Los símbolos aquí suelen estar vinculados al cuerpo, al poder, a la sexualidad, a las experiencias infantiles y a los mecanismos de defensa. Es importante observar no solo el objeto del sueño, sino también los sentimientos que provoca.',
      'La interpretación ayuda a revelar motivos ocultos del comportamiento y a comprender qué procesos internos están activos en este momento.',
    ],
    promptHint:
      'Describe tu sueño con el mayor detalle posible: lugar, personas, objetos, emociones y lo que ocurrió al final.',
  },
  jungian: {
    title: 'Junguiano',
    description: 'Arquetipos y el lenguaje del inconsciente colectivo.',
    features: 'Arquetipos, inconsciente colectivo',
    about: [
      'El enfoque junguiano ve el sueño como un diálogo del alma consigo misma. Los sueños hablan un lenguaje arquetípico — a través de imágenes de la Sombra, el Ánima, el Ánimus, el Sabio, el Héroe y otras figuras universales.',
      'Un sueño puede mostrar no solo experiencias personales, sino también patrones profundos por los que una persona transita en el camino de la individuación — convertirse en un ser íntegro.',
      'Se presta especial atención a los símbolos recurrentes, las transformaciones y la tarea interior que el sueño invita a reconocer.',
    ],
    promptHint:
      'Cuenta tu sueño: quién apareció, qué imágenes se repitieron, qué cambió y qué sensación quedó al despertar.',
  },
  miller: {
    title: 'Miller',
    description: 'Un diccionario clásico de sueños con carácter predictivo.',
    features: 'Diccionario clásico predictivo',
    about: [
      'El diccionario de Miller es uno de los intérpretes clásicos más conocidos. Relaciona las imágenes del sueño con acontecimientos cotidianos, cambios, encuentros y advertencias.',
      'Aquí el sueño se lee a través de asociaciones populares y culturales estables: lo que se sueña puede indicar lo que podría ocurrir en un futuro cercano.',
      'La interpretación se construye sobre un análisis secuencial de los símbolos clave y sus significados tradicionales.',
    ],
    promptHint:
      'Describe tu sueño en orden: lo que viste, con quién interactuaste y cómo terminó todo.',
  },
  vanga: {
    title: 'Vanga',
    description: 'Un diccionario popular y místico de sueños con tono predictivo.',
    features: 'Popular, místico, predictivo',
    about: [
      'El diccionario al estilo de Vanga lee los sueños como presagios y mensajes del destino. Las imágenes aquí llevan advertencia, esperanza o señal de un giro importante.',
      'Los sueños vívidos, inquietantes o de una luminosidad inusual se consideran especialmente significativos.',
      'La interpretación combina sabiduría popular, intuición simbólica y atención al sentido espiritual de lo ocurrido.',
    ],
    promptHint:
      'Describe tu sueño por completo, señalando los detalles más vívidos y lo que te pareció significativo o inquietante.',
  },
  nostradamus: {
    title: 'Nostradamus',
    description: 'Una visión profética y mística de las visiones oníricas.',
    features: 'Profético, místico',
    about: [
      'El diccionario al estilo de Nostradamus considera el sueño como una visión profética. Los símbolos pueden señalar cambios venideros, pruebas, revelaciones y leyes ocultas del tiempo.',
      'Las imágenes suelen leerse alegóricamente: elementos, signos celestes, guerras, coronas, fuego y agua llevan un mensaje sobre el destino de una persona o de sus seres queridos.',
      'La interpretación se basa en encontrar un sentido oculto y una conclusión profética general.',
    ],
    promptHint:
      'Describe tu sueño como una visión: qué ocurrió, qué signos o detalles extraños recuerdas.',
  },
  loff: {
    title: 'Loff',
    description: 'Un enfoque psicológico moderno de los sueños.',
    features: 'Psicológico moderno',
    about: [
      'El diccionario de Loff parte de que el significado de un símbolo depende de la experiencia personal del soñador. Una misma imagen puede significar cosas distintas para personas diferentes.',
      'Aquí son esenciales las emociones, el contexto vital y las asociaciones que provoca el sueño. El sueño ayuda a comprender el estado interior actual y las reacciones inconscientes.',
      'La interpretación conecta suavemente las imágenes del sueño con los procesos psicológicos y la situación vital.',
    ],
    promptHint:
      'Describe tu sueño y añade qué sentimientos despertó en ti y qué de lo visto te parece personalmente significativo.',
  },
  esoteric: {
    title: 'Esotérico',
    description: 'Simbolismo, numerología y elementos en la interpretación de sueños.',
    features: 'Simbolismo, numerología, elementos',
    about: [
      'El diccionario esotérico lee los sueños a través de símbolos de elementos, números, colores y correspondencias planetarias y espirituales.',
      'Cada imagen puede ser una clave del estado energético, del equilibrio interior y de las vibraciones ocultas del momento.',
      'La interpretación une simbolismo, signos numéricos y sentido elemental de lo visto.',
    ],
    promptHint:
      'Describe tu sueño, indicando colores, números y elementos (fuego, agua, tierra, aire) si estaban presentes.',
  },
  islamic: {
    title: 'Islámico',
    description: 'Interpretación tradicional islámica de los sueños.',
    features: 'Tradición islámica',
    about: [
      'La tradición islámica de interpretación de sueños distingue visiones espiritualmente significativas, sueños perturbadores y el sueño ordinario. Un sueño puede llevar buen consejo, advertencia o reflejo del estado interior.',
      'Los símbolos se leen a través de un sentido moral, espiritual y cotidiano, con respeto por la tradición del ta\'bir al-ru\'ya.',
      'La interpretación se ofrece con delicadeza, sin veredictos categóricos, con énfasis en la sabiduría y la reflexión.',
    ],
    promptHint:
      'Describe tu sueño en detalle: lo que viste, los sentimientos que experimentaste y lo que recuerdas con mayor claridad.',
  },
  vedic: {
    title: 'Védico',
    description: 'Interpretación de sueños basada en la simbología védica.',
    features: 'Basado en textos védicos',
    about: [
      'El enfoque védico ve el sueño como reflejo del karma, del estado interior de la conciencia y de una lección espiritual.',
      'Las imágenes pueden señalar procesos kármicos, purificación, bendición, prueba o la necesidad de disciplina interior.',
      'La interpretación se apoya en la simbología védica y en la búsqueda del sentido profundo de lo visto.',
    ],
    promptHint:
      'Describe tu sueño: lugar, acciones, personas, animales e imágenes luminosas u oscuras que viste.',
  },
  chinese: {
    title: 'Chino',
    description: 'Simbolismo oriental tradicional en los sueños.',
    features: 'Simbolismo oriental tradicional',
    about: [
      'El diccionario chino lee las imágenes a través de la simbología oriental tradicional: animales, elementos, ciclos de fortuna, armonía y desequilibrio de energías.',
      'Un sueño puede indicar signos favorables o desfavorables, cambios en el destino, la familia, los asuntos y el equilibrio interior.',
      'La interpretación conecta lo visto con significados tradicionales y una conclusión general sobre el signo del sueño.',
    ],
    promptHint:
      'Describe tu sueño: quién y qué apareció, qué objetos, animales o imágenes naturales recuerdas.',
  },
};
