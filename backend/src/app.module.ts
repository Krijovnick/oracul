import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { DatabaseModule } from './database/database.module';
import { TarotModule } from './tarot/tarot.module';
import { DreamsModule } from './dreams/dreams.module';
import { SharesModule } from './shares/shares.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: '../.env',
    }),
    DatabaseModule,
    TarotModule,
    DreamsModule,
    SharesModule,
  ],
})
export class AppModule {}
