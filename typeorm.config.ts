import serverConfig from 'src/config/env.config';

const typeOrmConfig = {
  type: serverConfig.DATABASE_TYPE as any,
  host: serverConfig.DB_HOST,
  port: serverConfig.DB_PORT,
  username: serverConfig.DB_USERNAME,
  password: serverConfig.DB_PASSWORD,
  database: serverConfig.DB_DATABASE,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: serverConfig.TYPEORM_SYNC,
  autoLoadEntities: true,
};

export default typeOrmConfig;
