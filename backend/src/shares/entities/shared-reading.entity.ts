import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

export type SharedReadingType = 'tarot' | 'dream';

export interface TarotSharePayload {
  spreadId: string;
  question: string;
  cards: Array<{
    position: string;
    cardId: string;
    reversed: boolean;
  }>;
  interpretation: string;
}

export interface DreamSharePayload {
  dictionaryId: string;
  description: string;
  interpretation: string;
}

export type SharedReadingPayload = TarotSharePayload | DreamSharePayload;

@Entity('shared_readings')
export class SharedReading {
  @PrimaryColumn({ length: 12 })
  id!: string;

  @Column({ type: 'varchar', length: 10 })
  type!: SharedReadingType;

  @Column({ type: 'varchar', length: 5 })
  locale!: string;

  @Column({ type: 'jsonb' })
  payload!: SharedReadingPayload;

  @CreateDateColumn()
  createdAt!: Date;
}
