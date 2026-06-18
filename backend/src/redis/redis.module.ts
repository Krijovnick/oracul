import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisModule as IORedisModule } from '@nestjs-modules/ioredis';

@Module({
  imports: [
    IORedisModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'single',
        host: config.get<string>('redis.host'),
        port: config.get<number>('redis.port'),
      }),
    }),
  ],
})
export class RedisModule {}
