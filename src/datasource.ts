import { DataSource } from 'typeorm';
import 'dotenv/config';
import serverConfig from './config/env.config';

/**
 * Datasource for typeorm cli
 */
export const migrationsDataSource = new DataSource({
  type: serverConfig.DATABASE_TYPE as any,
  host: serverConfig.DB_HOST,
  port: serverConfig.DB_PORT,
  username: serverConfig.DB_USERNAME,
  password: serverConfig.DB_PASSWORD,
  database: serverConfig.DB_DATABASE,
  entities: ['src/**/entities/*.ts'],
  migrations: ['migrations/*.ts'],
});
