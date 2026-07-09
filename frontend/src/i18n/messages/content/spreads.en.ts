import type { SpreadMessages } from '../types';

export const spreadMessages: Record<string, SpreadMessages> = {
  'yes-no': {
    title: 'Yes/No Answer',
    description: 'Ask a question and receive a clear answer from fate — yes or no.',
    positions: ['Answer'],
    about: [
      'The Yes/No spread is one of the oldest and most direct ways to consult the wisdom of Tarot. It is designed for moments when the soul seeks clarity: whether to agree, move forward, let go, or wait.',
      'In this spread, a single card is drawn that becomes the voice of the universe in response to your question. An upright card points to "yes" or a favorable outcome; a reversed card points to "no," an obstacle, or the need to reconsider the situation.',
      'Tarot cards do not deliver rigid verdicts — they reflect the energy of the moment and help reveal the hidden forces influencing your choice. Trust your intuition and let the symbols speak to you.',
    ],
    promptHint:
      'Formulate a question that can be answered with "yes" or "no." For example: "Should I accept this offer?"',
  },
  'card-of-day': {
    title: 'Card of the Day',
    description: 'Discover which card will guide you today and what it symbolizes.',
    positions: ['Card of the Day'],
    about: [
      'The Card of the Day spread is a gentle and wise companion for every morning. A single card reveals the main theme, mood, and lesson the Universe has prepared for you on this day.',
      'This spread does not require complex questions — simply attune yourself to the day and allow the deck to choose the symbol that will be your guide. The card may warn of challenges, point to opportunities, or remind you of your inner strength.',
      'An upright position reveals the open, active meaning of the arcana. A reversed position reveals the card\'s shadow: what requires attention, patience, or inner work. Together they create a complete picture of your day.',
    ],
    promptHint:
      'Describe what concerns you today, or ask a question about the day ahead. For example: "What energy should I embrace today?"',
  },
  'three-cards': {
    title: 'Three Cards',
    description: 'Past, present, and future — the timeline of your situation.',
    positions: ['Past', 'Present', 'Future'],
    about: [
      'The classic three-card spread reveals a timeline: where you came from, where you are now, and where you are heading.',
      'The first card shows the roots of the situation and past experience. The second reveals the current energy and main forces of the moment. The third shows the likely course of events if the present path continues.',
      'This spread is suitable for any question about how a situation develops over time.',
    ],
    promptHint:
      'Ask a question about how your situation is unfolding. For example: "How will my career develop?"',
  },
  'celtic-cross': {
    title: 'Celtic Cross',
    description: 'An in-depth analysis of your situation — ten cards for the full picture.',
    positions: [
      'Heart of the Matter',
      'Challenge',
      'Goal / Conscious',
      'Foundation / Subconscious',
      'Past',
      'Near Future',
      'Yourself',
      'Environment',
      'Hopes and Fears',
      'Outcome',
    ],
    about: [
      'The Celtic Cross is one of the deepest and most ancient Tarot spreads. Ten cards reveal the situation from every angle: visible and hidden, past and future, inner and outer.',
      'The central cross shows the essence and dynamics of the situation, while the column on the right reveals your attitude, surroundings, and final outlook.',
      'Use this spread when you need a comprehensive analysis of a complex life situation.',
    ],
    promptHint:
      'Describe the situation you wish to explore in depth. For example: "What do I need to know about my relationship with...?"',
  },
  horseshoe: {
    title: 'Horseshoe',
    description: 'Seven cards — a forecast for the near future.',
    positions: [
      'Past',
      'Present',
      'Near Future',
      'Your Approach',
      'External Influences',
      'Obstacles',
      'Final Outcome',
    ],
    about: [
      'The Horseshoe spread is laid out in the shape of a horseshoe and offers a broad view of how a situation will unfold in the near term.',
      'Seven positions sequentially reveal the path from past to outcome, showing the forces that help or hinder.',
      'Ideal for questions about upcoming events and decision-making.',
    ],
    promptHint:
      'Ask about what awaits you in the near future. For example: "How will my trip next week unfold?"',
  },
  'relationship-pyramid': {
    title: 'Relationship Pyramid',
    description: 'Six cards — an analysis of the relationship between two people.',
    positions: [
      'You',
      'Partner',
      'Connection Between You',
      'Strengths',
      'Weaknesses',
      'Outlook',
    ],
    about: [
      'The Relationship Pyramid explores the dynamics between two people — romantic partners, friends, colleagues, or relatives.',
      'The spread reveals each person\'s energy, the nature of the bond, the strengths and weaknesses of the relationship, and its possible development.',
      'Ask a question about the specific relationship that concerns you.',
    ],
    promptHint:
      'Describe the relationship you wish to explore. For example: "What are the prospects of my relationship with...?"',
  },
  star: {
    title: 'The Star',
    description: 'Six cards — spiritual path and personal growth.',
    positions: [
      'Past',
      'Present',
      'Near Future',
      'Advice',
      'External Influences',
      'Outcome',
    ],
    about: [
      'The Star spread is focused on spiritual growth and self-discovery. Six cards are arranged in the shape of a star and illuminate your inner path.',
      'It helps you see where you came from, where you stand on your path of development, and what advice the cards offer for your growth.',
      'Use this spread for questions about self-development, purpose, and spiritual path.',
    ],
    promptHint:
      'Ask about your spiritual path or personal growth. For example: "What do I need to develop within myself now?"',
  },
  'tree-of-life': {
    title: 'Tree of Life',
    description: 'Ten cards — a Kabbalistic spread across all areas of life.',
    positions: [
      'Kether — Spirituality',
      'Chokmah — Wisdom',
      'Binah — Understanding',
      'Chesed — Mercy',
      'Geburah — Strength',
      'Tiphereth — Harmony',
      'Netzach — Victory',
      'Hod — Splendor',
      'Yesod — Foundation',
      'Malkuth — Material World',
    ],
    about: [
      'The Tree of Life is a Kabbalistic spread based on the ten sephiroth. Each card corresponds to one sphere of existence and reveals a specific aspect of your life.',
      'From the highest spirituality (Kether) to the material world (Malkuth) — the spread provides a holistic picture of all levels of your being.',
      'Suitable for deep self-analysis and finding balance among different areas of life.',
    ],
    promptHint:
      'Ask a question about balance and harmony in your life. For example: "Which areas of my life need attention?"',
  },
  year: {
    title: 'Year Ahead Spread',
    description: 'Twelve cards — one for each month of the year.',
    positions: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    about: [
      'The year-ahead spread reveals the energy of each of the twelve months. Each card is a key to understanding the main themes, challenges, and opportunities of that period.',
      'The cards are arranged in a circle, like months on a clock face, creating a complete map of your year.',
      'Ask a question about the year ahead, or simply let the cards reveal the overall picture.',
    ],
    promptHint:
      'Ask about the year ahead. For example: "What will this year be like for me?" or "What should I focus on in the coming months?"',
  },
  situation: {
    title: 'Situation Spread',
    description: 'Three cards — an analysis of your current situation.',
    positions: ['Heart of the Situation', 'Hidden Influence', 'Advice / Development'],
    about: [
      'A compact three-card spread for a quick yet meaningful analysis of your current situation.',
      'The first card shows the essence of what is happening, the second reveals hidden forces and factors, and the third offers the cards\' advice and likely development.',
      'Ideal when you need to quickly understand a specific situation.',
    ],
    promptHint:
      'Describe the situation you wish to analyze. For example: "What is happening in my work situation?"',
  },
};
