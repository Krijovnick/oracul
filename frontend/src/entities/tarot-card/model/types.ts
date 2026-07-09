export interface TarotCard {
  id: string;
  imageSrc: string;
}

export interface LocalizedTarotCard extends TarotCard {
  name: string;
}

export interface DrawnCard {
  card: LocalizedTarotCard;
  reversed: boolean;
}

export interface PositionedCard extends DrawnCard {
  position: string;
}
