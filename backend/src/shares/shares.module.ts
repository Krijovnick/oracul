import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SharedReading } from './entities/shared-reading.entity';
import { SharesController } from './shares.controller';
import { SharesService } from './shares.service';

@Module({
  imports: [TypeOrmModule.forFeature([SharedReading])],
  controllers: [SharesController],
  providers: [SharesService],
})
export class SharesModule {}
