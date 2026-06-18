import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);
  const port = config.get<number>('port') ?? 3000;
  const frontendUrl = config.get<string>('frontendUrl') ?? 'http://localhost:3001';

  app.enableCors({
    origin: frontendUrl,
    credentials: true,
  });

  app.setGlobalPrefix('api');

  await app.listen(port);
  console.log(`Backend running on http://localhost:${port}/api`);
}
bootstrap();
