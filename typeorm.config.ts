import serverConfig from 'src/config/env.config';
import { ConnectionOptions } from 'typeorm';

const typeOrmConfig: ConnectionOptions = {
  type: serverConfig.DATABASE_TYPE as any,
  host: serverConfig.DB_HOST,
  port: serverConfig.DB_PORT,
  username: serverConfig.DB_USERNAME,
  password: serverConfig.DB_PASSWORD,
  database: serverConfig.DB_DATABASE,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: serverConfig.TYPEORM_SYNC,
};

export default typeOrmConfig;
