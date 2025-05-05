import { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'sua_senha',
      database: 'seu_banco'
    },
    migrations: {
      directory: './migrations'
    }
  }
};

export default config;