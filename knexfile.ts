import { env } from './src/env';

export default {
  development: {
    client: 'mysql2',
    connection: {
      host: env.HOST,
      port: env.PORT,
      user: env.USER,
      password: env.PASSWORD,
      database: env.DATABASE,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations'
    }
  }
};
