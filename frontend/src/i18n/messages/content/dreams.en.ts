import type { DreamDictionaryMessages } from '../types';

export const dreamDictionaryMessages: Record<string, DreamDictionaryMessages> = {
  freudian: {
    title: 'Freudian',
    description: 'A psychoanalytic perspective on symbols of the unconscious.',
    features: 'Psychoanalytic, symbols of the unconscious',
    about: [
      'The Freudian dream dictionary views dreams as a path to repressed desires, fears, and inner conflicts. Images in dreams are encrypted messages from the psyche, concealing what consciousness is not ready to accept directly.',
      'Symbols here are often linked to the body, power, sexuality, childhood experiences, and defense mechanisms. It is important to look not only at the object of the dream, but also at the feelings it evokes.',
      'Interpretation helps reveal hidden motives behind behavior and understand which inner processes are currently active.',
    ],
    promptHint:
      'Describe your dream in as much detail as possible: place, people, objects, emotions, and what happened at the end.',
  },
  jungian: {
    title: 'Jungian',
    description: 'Archetypes and the language of the collective unconscious.',
    features: 'Archetypes, collective unconscious',
    about: [
      'The Jungian approach sees dreams as a dialogue of the soul with itself. Dreams speak in an archetypal language — through images of the Shadow, Anima, Animus, the Sage, the Hero, and other universal figures.',
      'A dream may reveal not only personal experiences, but also deep patterns through which a person passes on the path of individuation — becoming a whole self.',
      'Special attention is given to recurring symbols, transformations, and the inner task the dream invites you to recognize.',
    ],
    promptHint:
      'Tell about your dream: who appeared, which images recurred, what changed, and what feeling remained after waking.',
  },
  miller: {
    title: "Miller's",
    description: 'A classic predictive dream dictionary.',
    features: 'Classic predictive dream dictionary',
    about: [
      "Miller's dream dictionary is one of the best-known classical interpreters. It connects dream images with everyday events, changes, encounters, and warnings.",
      'Here, dreams are read through stable folk and cultural associations: what you dream of may point to what could happen in the near future.',
      'Interpretation is built on a sequential analysis of key symbols and their traditional meanings.',
    ],
    promptHint:
      'Describe your dream in order: what you saw, whom you interacted with, and how it ended.',
  },
  vanga: {
    title: "Vanga's",
    description: 'A folk mystical dream dictionary with a predictive tone.',
    features: 'Folk, mystical, predictive',
    about: [
      "Vanga's style of dream interpretation reads dreams as omens and messages from fate. Images here carry warning, hope, or a sign of an important turning point.",
      'Vivid, anxious, or unusually luminous dreams are considered especially significant.',
      'Interpretation combines folk wisdom, intuitive feeling for symbols, and attention to the spiritual meaning of what occurred.',
    ],
    promptHint:
      'Describe your dream in full, noting the most vivid details and what seemed significant or troubling to you.',
  },
  nostradamus: {
    title: "Nostradamus's",
    description: 'A prophetic and mystical view of dream visions.',
    features: 'Prophetic, mystical',
    about: [
      "Nostradamus's style of dream interpretation views dreams as prophetic visions. Symbols may point to coming changes, trials, revelations, and hidden patterns of time.",
      'Images are often read allegorically: elements, celestial signs, wars, crowns, fire, and water carry a message about the fate of a person or their loved ones.',
      'Interpretation is built on finding hidden meaning and an overall prophetic conclusion.',
    ],
    promptHint:
      'Describe your dream as a vision: what happened, which signs or strange details you remember.',
  },
  loff: {
    title: "Loff's",
    description: 'A modern psychological approach to dreams.',
    features: 'Modern psychological',
    about: [
      "Loff's dream dictionary holds that the meaning of a symbol depends on the dreamer's personal experience. The same image can mean different things to different people.",
      'Here, emotions, life context, and the associations the dream evokes are essential. Dreams help understand your current inner state and unconscious reactions.',
      'Interpretation gently connects dream images with psychological processes and life circumstances.',
    ],
    promptHint:
      'Describe your dream and add what feelings it stirred in you and what from what you saw feels personally significant.',
  },
  esoteric: {
    title: 'Esoteric',
    description: 'Symbolism, numerology, and elements in dream interpretation.',
    features: 'Symbolism, numerology, elements',
    about: [
      'The esoteric dream dictionary reads dreams through symbols of elements, numbers, colors, and planetary and spiritual correspondences.',
      'Each image may be a key to energetic state, inner balance, and hidden vibrations of the moment.',
      'Interpretation connects symbolism, numerical signs, and the elemental meaning of what was seen.',
    ],
    promptHint:
      'Describe your dream, noting colors, numbers, and elements (fire, water, earth, air) if they were present.',
  },
  islamic: {
    title: 'Islamic',
    description: 'Traditional Islamic dream interpretation.',
    features: 'Traditional Islamic',
    about: [
      'The Islamic tradition of dream interpretation distinguishes spiritually significant visions, disturbing dreams, and ordinary sleep. A dream may carry good counsel, a warning, or a reflection of inner state.',
      'Symbols are read through moral, spiritual, and worldly meaning, with respect for the tradition of ta\'bir al-ru\'ya.',
      'Interpretation is given gently, without categorical verdicts, with emphasis on wisdom and reflection.',
    ],
    promptHint:
      'Describe your dream in detail: what you saw, what feelings you experienced, and what you remember most vividly.',
  },
  vedic: {
    title: 'Vedic',
    description: 'Dream interpretation based on Vedic symbolism.',
    features: 'Based on Vedic texts',
    about: [
      'The Vedic approach sees dreams as a reflection of karma, the inner state of consciousness, and a spiritual lesson.',
      'Images may point to karmic processes, purification, blessing, trial, or the need for inner discipline.',
      'Interpretation draws on Vedic symbolism and the search for deep meaning in what was seen.',
    ],
    promptHint:
      'Describe your dream: place, actions, people, animals, and light or dark images you saw.',
  },
  chinese: {
    title: 'Chinese',
    description: 'Traditional Eastern symbolism in dreams.',
    features: 'Traditional Eastern symbolism',
    about: [
      'The Chinese dream dictionary reads images through traditional Eastern symbolism: animals, elements, cycles of fortune, harmony, and imbalance of energies.',
      'A dream may indicate favorable or unfavorable signs, changes in fate, family, affairs, and inner equilibrium.',
      'Interpretation connects what was seen with traditional meanings and an overall conclusion about the dream\'s sign.',
    ],
    promptHint:
      'Describe your dream: who and what appeared, which objects, animals, or natural images you remember.',
  },
};
