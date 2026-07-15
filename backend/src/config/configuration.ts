import { optionalEnv, requiredEnv, requiredIntEnv } from './env';

function databaseConfig() {
  const databaseUrl = process.env.DATABASE_URL?.trim();

  if (databaseUrl) {
    const parsed = new URL(databaseUrl);

    return {
      host: parsed.hostname,
      port: Number.parseInt(parsed.port || '5432', 10),
      username: decodeURIComponent(parsed.username),
      password: decodeURIComponent(parsed.password),
      database: parsed.pathname.replace(/^\//, ''),
      ssl: true,
    };
  }

  const nodeEnv = optionalEnv('NODE_ENV', 'development');
  const sslFlag = optionalEnv('DB_SSL', nodeEnv === 'production' ? 'true' : 'false');

  return {
    host: requiredEnv('DB_HOST'),
    port: requiredIntEnv('DB_PORT'),
    username: requiredEnv('DB_USERNAME'),
    password: requiredEnv('DB_PASSWORD'),
    database: requiredEnv('DB_DATABASE'),
    ssl: sslFlag === 'true',
  };
}

export default () => ({
  port: requiredIntEnv('PORT'),
  nodeEnv: optionalEnv('NODE_ENV', 'development'),
  frontendUrl: requiredEnv('FRONTEND_URL'),
  database: databaseConfig(),
  deepseek: {
    apiKey: requiredEnv('DEEPSEEK_API_KEY'),
  },
});
