export default () => ({
  port: parseInt(process.env.PORT as string, 10),
  nodeEnv: process.env.NODE_ENV as string,
  frontendUrl: process.env.FRONTEND_URL as string,
  database: {
    host: process.env.DB_HOST as string,
    port: parseInt(process.env.DB_PORT as string, 10),
    username: process.env.DB_USERNAME as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_DATABASE as string,
  },
  deepseek: {
    apiKey: process.env.DEEPSEEK_API_KEY as string,
  },
});
