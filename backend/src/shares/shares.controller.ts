import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import type { CreateShareDto } from './dto/create-share.dto';
import { SharesService } from './shares.service';

@Controller('shares')
export class SharesController {
  constructor(private readonly sharesService: SharesService) {}

  @Post()
  create(@Body() dto: CreateShareDto) {
    return this.sharesService.createShare(dto);
  }

  @Get(':id')
  get(@Param('id') id: string) {
    return this.sharesService.getShare(id);
  }
}
