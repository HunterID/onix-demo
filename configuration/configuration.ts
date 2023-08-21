import { Configuration } from './configuration.types';

// eslint-disable-next-line complexity,max-lines-per-function
export default (): Configuration => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  environment: process.env.NODE_ENV || 'development',
  postgres: {
    host: process.env.POSTGRES_HOST || '127.0.0.1',
    port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
    username: process.env.POSTGRES_USER || 'admin',
    password: process.env.POSTGRES_PASSWORD || 'admin',
    databaseName: process.env.POSTGRES_DATABASE_NAME || 'onix',
    synchronize: process.env.POSTGRES_SYNCHRONIZE === 'true',
    logging: process.env.POSTGRES_LOGGING === 'true',
  },
  swagger: {
    isEnabled: process.env.SWAGGER_ENABLED === 'true',
    user: process.env.SWAGGER_USER || 'admin',
    password: process.env.SWAGGER_PASSWORD || 'admin',
  },
});
