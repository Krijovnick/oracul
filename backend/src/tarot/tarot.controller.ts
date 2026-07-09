import { Body, Controller, Post } from '@nestjs/common';
import type { InterpretReadingDto } from './dto/interpret-reading.dto';
import { TarotService } from './tarot.service';

@Controller('tarot')
export class TarotController {
  constructor(private readonly tarotService: TarotService) {}

  @Post('interpret')
  interpret(@Body() dto: InterpretReadingDto) {
    return this.tarotService.interpretReading(dto);
  }
}
