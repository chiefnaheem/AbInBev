import * as env from 'env-var';
import { config } from 'dotenv';

config();

const PORT = env.get('PORT').asInt();
const NODE_ENV = env.get('NODE_ENV').asString();
const DATABASE_TYPE = env.get('DATABASE_TYPE').required().asString() || 'mysql';
const DATABASE_DRIVER = env.get('DATABASE_DRIVER').required().asString();
const DB_HOST = env.get('DB_HOST').required().asString();
const DB_PORT = env.get('DB_PORT').required().asInt();
const DB_USERNAME = env.get('DB_USERNAME').required().asString();
const DB_PASSWORD = env.get('DB_PASSWORD').required().asString();
const DB_DATABASE = env.get('DB_DATABASE').required().asString();
const TYPEORM_SYNC = env.get('TYPEORM_SYNC').required().asBool();


const serverConfig = {
  NODE_ENV,
  PORT,
  DATABASE_TYPE,
  DATABASE_DRIVER,
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_DATABASE,
  TYPEORM_SYNC
 
};

export default serverConfig;
