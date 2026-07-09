import type { SpreadMessages } from '../types';

export const spreadMessages: Record<string, SpreadMessages> = {
  'yes-no': {
    title: 'Respuesta sí/no',
    description: 'Haz una pregunta y recibe una respuesta clara del destino — sí o no.',
    positions: ['Respuesta'],
    about: [
      'La tirada sí/no es una de las formas más antiguas y directas de consultar la sabiduría del Tarot. Está diseñada para momentos en los que el alma busca claridad: si aceptar, avanzar, soltar o esperar.',
      'En esta tirada se extrae una sola carta que se convierte en la voz del universo en respuesta a tu pregunta. Una carta en posición vertical indica «sí» o un resultado favorable; una carta invertida indica «no», un obstáculo o la necesidad de reconsiderar la situación.',
      'Las cartas del Tarot no dictan veredictos rígidos — reflejan la energía del momento y ayudan a revelar las fuerzas ocultas que influyen en tu elección. Confía en tu intuición y deja que los símbolos te hablen.',
    ],
    promptHint:
      'Formula una pregunta que pueda responderse con «sí» o «no». Por ejemplo: «¿Debo aceptar esta oferta?»',
  },
  'card-of-day': {
    title: 'Carta del día',
    description: 'Descubre qué carta te guiará hoy y qué simboliza.',
    positions: ['Carta del día'],
    about: [
      'La tirada Carta del día es una compañera suave y sabia para cada mañana. Una sola carta revela el tema principal, el ambiente y la lección que el Universo ha preparado para ti en este día.',
      'Esta tirada no requiere preguntas complejas — basta con sintonizarte con el día y permitir que la baraja elija el símbolo que será tu guía. La carta puede advertir sobre desafíos, señalar oportunidades o recordarte tu fuerza interior.',
      'La posición vertical revela el significado abierto y activo del arcano. La posición invertida revela la sombra de la carta: lo que requiere atención, paciencia o trabajo interior. Juntas crean una imagen completa de tu día.',
    ],
    promptHint:
      'Describe lo que te preocupa hoy, o haz una pregunta sobre el día que viene. Por ejemplo: «¿Qué energía debo cultivar hoy?»',
  },
  'three-cards': {
    title: 'Tres cartas',
    description: 'Pasado, presente y futuro — la línea temporal de tu situación.',
    positions: ['Pasado', 'Presente', 'Futuro'],
    about: [
      'La tirada clásica de tres cartas revela una línea temporal: de dónde vienes, dónde estás ahora y hacia dónde te diriges.',
      'La primera carta muestra las raíces de la situación y la experiencia pasada. La segunda revela la energía actual y las fuerzas principales del momento. La tercera muestra el desarrollo probable de los acontecimientos si se mantiene el rumbo actual.',
      'Esta tirada es adecuada para cualquier pregunta sobre cómo se desarrolla una situación en el tiempo.',
    ],
    promptHint:
      'Haz una pregunta sobre cómo se desarrolla tu situación. Por ejemplo: «¿Cómo evolucionará mi carrera?»',
  },
  'celtic-cross': {
    title: 'Cruz celta',
    description: 'Un análisis profundo de la situación — diez cartas para la imagen completa.',
    positions: [
      'Esencia de la situación',
      'Obstáculo',
      'Objetivo / Consciente',
      'Base / Subconsciente',
      'Pasado',
      'Futuro cercano',
      'Tú mismo',
      'Entorno',
      'Esperanzas y miedos',
      'Resultado',
    ],
    about: [
      'La Cruz celta es una de las tiradas de Tarot más profundas y antiguas. Diez cartas revelan la situación desde todos los ángulos: lo visible y lo oculto, el pasado y el futuro, lo interior y lo exterior.',
      'La cruz central muestra la esencia y la dinámica de la situación, mientras que la columna de la derecha revela tu actitud, tu entorno y el pronóstico final.',
      'Usa esta tirada cuando necesites un análisis integral de una situación vital compleja.',
    ],
    promptHint:
      'Describe la situación que deseas explorar en profundidad. Por ejemplo: «¿Qué necesito saber sobre mi relación con...?»',
  },
  horseshoe: {
    title: 'Herradura',
    description: 'Siete cartas — un pronóstico para el futuro cercano.',
    positions: [
      'Pasado',
      'Presente',
      'Futuro cercano',
      'Tu enfoque',
      'Influencias externas',
      'Obstáculos',
      'Resultado final',
    ],
    about: [
      'La tirada de la Herradura se dispone en forma de herradura y ofrece una visión amplia de cómo se desarrollará la situación a corto plazo.',
      'Siete posiciones revelan sucesivamente el camino del pasado al resultado, mostrando las fuerzas que ayudan u obstaculizan.',
      'Ideal para preguntas sobre acontecimientos próximos y la toma de decisiones.',
    ],
    promptHint:
      'Pregunta sobre lo que te espera en un futuro cercano. Por ejemplo: «¿Cómo se desarrollará mi viaje la próxima semana?»',
  },
  'relationship-pyramid': {
    title: 'Pirámide de relaciones',
    description: 'Seis cartas — un análisis de la relación entre dos personas.',
    positions: [
      'Tú',
      'Pareja',
      'Vínculo entre ustedes',
      'Fortalezas',
      'Debilidades',
      'Perspectiva',
    ],
    about: [
      'La Pirámide de relaciones explora la dinámica entre dos personas — parejas románticas, amigos, colegas o familiares.',
      'La tirada revela la energía de cada uno, la naturaleza del vínculo, las fortalezas y debilidades de la relación, así como su posible desarrollo.',
      'Haz una pregunta sobre la relación específica que te preocupa.',
    ],
    promptHint:
      'Describe la relación que deseas explorar. Por ejemplo: «¿Cuáles son las perspectivas de mi relación con...?»',
  },
  star: {
    title: 'La Estrella',
    description: 'Seis cartas — camino espiritual y crecimiento personal.',
    positions: [
      'Pasado',
      'Presente',
      'Futuro cercano',
      'Consejo',
      'Influencias externas',
      'Resultado',
    ],
    about: [
      'La tirada de La Estrella está orientada al crecimiento espiritual y al autoconocimiento. Seis cartas se disponen en forma de estrella e iluminan tu camino interior.',
      'Ayuda a ver de dónde vienes, dónde te encuentras en tu camino de desarrollo y qué consejo ofrecen las cartas para tu crecimiento.',
      'Usa esta tirada para preguntas sobre el autodesarrollo, el propósito y el camino espiritual.',
    ],
    promptHint:
      'Pregunta sobre tu camino espiritual o tu crecimiento personal. Por ejemplo: «¿Qué necesito desarrollar en mí ahora?»',
  },
  'tree-of-life': {
    title: 'Árbol de la vida',
    description: 'Diez cartas — una tirada cabalística sobre todas las esferas de la vida.',
    positions: [
      'Kether — Espiritualidad',
      'Jojmá — Sabiduría',
      'Biná — Comprensión',
      'Jésed — Misericordia',
      'Geburá — Fuerza',
      'Tiferet — Armonía',
      'Nétzaj — Victoria',
      'Hod — Esplendor',
      'Yesod — Fundamento',
      'Malkut — Mundo material',
    ],
    about: [
      'El Árbol de la vida es una tirada cabalística basada en las diez sefirot. Cada carta corresponde a una esfera de la existencia y revela un aspecto concreto de tu vida.',
      'Desde la espiritualidad más elevada (Kether) hasta el mundo material (Malkut) — la tirada ofrece una imagen holística de todos los niveles de tu ser.',
      'Adecuada para un profundo autoanálisis y la búsqueda de equilibrio entre las distintas esferas de la vida.',
    ],
    promptHint:
      'Haz una pregunta sobre el equilibrio y la armonía en tu vida. Por ejemplo: «¿Qué esferas de mi vida necesitan atención?»',
  },
  year: {
    title: 'Tirada del año',
    description: 'Doce cartas — una para cada mes del año.',
    positions: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ],
    about: [
      'La tirada del año revela la energía de cada uno de los doce meses. Cada carta es una clave para comprender los temas principales, los desafíos y las oportunidades de ese período.',
      'Las cartas se disponen en círculo, como los meses en un reloj, creando un mapa completo de tu año.',
      'Haz una pregunta sobre el año que viene, o simplemente deja que las cartas revelen la imagen general.',
    ],
    promptHint:
      'Pregunta sobre el año que viene. Por ejemplo: «¿Cómo será este año para mí?» o «¿En qué debo centrarme en los próximos meses?»',
  },
  situation: {
    title: 'Tirada de situación',
    description: 'Tres cartas — un análisis de la situación actual.',
    positions: ['Esencia de la situación', 'Influencia oculta', 'Consejo / Desarrollo'],
    about: [
      'Una tirada compacta de tres cartas para un análisis rápido pero profundo de la situación actual.',
      'La primera carta muestra la esencia de lo que ocurre, la segunda revela las fuerzas y factores ocultos, y la tercera ofrece el consejo de las cartas y el desarrollo probable.',
      'Ideal cuando necesitas comprender rápidamente una situación concreta.',
    ],
    promptHint:
      'Describe la situación que deseas analizar. Por ejemplo: «¿Qué está pasando en mi situación laboral?»',
  },
};
