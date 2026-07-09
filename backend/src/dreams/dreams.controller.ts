import { Body, Controller, Post } from '@nestjs/common';
import type { InterpretDreamDto } from './dto/interpret-dream.dto';
import { DreamsService } from './dreams.service';

@Controller('dreams')
export class DreamsController {
  constructor(private readonly dreamsService: DreamsService) {}

  @Post('interpret')
  interpret(@Body() dto: InterpretDreamDto) {
    return this.dreamsService.interpretDream(dto);
  }
}
