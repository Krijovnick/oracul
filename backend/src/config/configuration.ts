import { optionalEnv, requiredEnv, requiredIntEnv } from './env';

export default () => ({
  port: requiredIntEnv('PORT'),
  nodeEnv: optionalEnv('NODE_ENV', 'development'),
  frontendUrl: requiredEnv('FRONTEND_URL'),
  database: {
    host: requiredEnv('DB_HOST'),
    port: requiredIntEnv('DB_PORT'),
    username: requiredEnv('DB_USERNAME'),
    password: requiredEnv('DB_PASSWORD'),
    database: requiredEnv('DB_DATABASE'),
  },
  deepseek: {
    apiKey: requiredEnv('DEEPSEEK_API_KEY'),
  },
});
