import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomBytes } from 'crypto';
import { Repository } from 'typeorm';
import { resolveLocale } from '../i18n/locales';
import type { CreateShareDto } from './dto/create-share.dto';
import {
  SharedReading,
  type DreamSharePayload,
  type TarotSharePayload,
} from './entities/shared-reading.entity';

const VALID_SPREAD_IDS = new Set([
  'yes-no',
  'card-of-day',
  'three-cards',
  'celtic-cross',
  'horseshoe',
  'relationship-pyramid',
  'star',
  'tree-of-life',
  'year',
  'situation',
]);

const VALID_DICTIONARY_IDS = new Set([
  'freudian',
  'jungian',
  'miller',
  'vanga',
  'nostradamus',
  'loff',
  'esoteric',
  'islamic',
  'vedic',
  'chinese',
]);

@Injectable()
export class SharesService {
  constructor(
    @InjectRepository(SharedReading)
    private readonly sharesRepository: Repository<SharedReading>,
  ) {}

  async createShare(dto: CreateShareDto): Promise<{ id: string }> {
    const locale = resolveLocale(dto.locale);
    const payload = this.buildPayload(dto, locale);
    const id = this.generateShareId();

    const share = this.sharesRepository.create({
      id,
      type: dto.type,
      locale,
      payload,
    });

    await this.sharesRepository.save(share);
    return { id };
  }

  async getShare(id: string): Promise<SharedReading> {
    const share = await this.sharesRepository.findOne({ where: { id } });
    if (!share) {
      throw new NotFoundException('Share not found');
    }
    return share;
  }

  private buildPayload(dto: CreateShareDto, locale: string): TarotSharePayload | DreamSharePayload {
    const interpretation = dto.interpretation?.trim();
    if (!interpretation) {
      throw new BadRequestException('Interpretation is required');
    }

    if (dto.type === 'tarot') {
      if (!dto.spreadId || !VALID_SPREAD_IDS.has(dto.spreadId)) {
        throw new BadRequestException('Invalid spread');
      }
      if (!dto.question?.trim()) {
        throw new BadRequestException('Question is required');
      }
      if (!Array.isArray(dto.cards) || dto.cards.length === 0) {
        throw new BadRequestException('Cards are required');
      }

      for (const card of dto.cards) {
        if (!card.position?.trim() || !card.cardId?.trim()) {
          throw new BadRequestException('Invalid card data');
        }
        if (typeof card.reversed !== 'boolean') {
          throw new BadRequestException('Invalid card orientation');
        }
      }

      return {
        spreadId: dto.spreadId,
        question: dto.question.trim(),
        cards: dto.cards.map((card) => ({
          position: card.position.trim(),
          cardId: card.cardId.trim(),
          reversed: card.reversed,
        })),
        interpretation,
      };
    }

    if (dto.type === 'dream') {
      if (!dto.dictionaryId || !VALID_DICTIONARY_IDS.has(dto.dictionaryId)) {
        throw new BadRequestException('Invalid dictionary');
      }
      if (!dto.description?.trim()) {
        throw new BadRequestException('Description is required');
      }

      return {
        dictionaryId: dto.dictionaryId,
        description: dto.description.trim(),
        interpretation,
      };
    }

    throw new BadRequestException('Invalid share type');
  }

  private generateShareId(): string {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const bytes = randomBytes(12);
    let id = '';

    for (let i = 0; i < 12; i++) {
      id += alphabet[bytes[i] % alphabet.length];
    }

    return id;
  }
}
