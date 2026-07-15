import { config as loadEnv } from 'dotenv';
import { resolve } from 'path';
import { DataSource } from 'typeorm';
import { SharedReading } from '../shares/entities/shared-reading.entity';

loadEnv({ path: resolve(process.cwd(), '.env') });
loadEnv({ path: resolve(process.cwd(), '../.env') });

function resolveDatabaseOptions() {
  const databaseUrl = process.env.DATABASE_URL?.trim();

  if (databaseUrl) {
    const parsed = new URL(databaseUrl);

    return {
      host: parsed.hostname,
      port: Number.parseInt(parsed.port || '5432', 10),
      username: decodeURIComponent(parsed.username),
      password: decodeURIComponent(parsed.password),
      database: parsed.pathname.replace(/^\//, ''),
      ssl: { rejectUnauthorized: false } as const,
    };
  }

  const useSsl =
    process.env.DB_SSL === 'true' || process.env.NODE_ENV === 'production';

  return {
    host: process.env.DB_HOST,
    port: Number.parseInt(process.env.DB_PORT ?? '5432', 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    ssl: useSsl ? ({ rejectUnauthorized: false } as const) : false,
  };
}

export default new DataSource({
  type: 'postgres',
  ...resolveDatabaseOptions(),
  entities: [SharedReading],
  migrations: [resolve(__dirname, 'migrations/*{.ts,.js}')],
});
