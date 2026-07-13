import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import configuration from './config/configuration';
import { DatabaseModule } from './database/database.module';
import { DreamsModule } from './dreams/dreams.module';
import { HealthController } from './health/health.controller';
import { SharesModule } from './shares/shares.module';
import { TarotModule } from './tarot/tarot.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: [
        join(process.cwd(), '.env'),
        join(process.cwd(), '..', '.env'),
      ],
    }),
    DatabaseModule,
    TarotModule,
    DreamsModule,
    SharesModule,
  ],
  controllers: [HealthController],
})
export class AppModule {}
