import { Knex } from 'knex';

const config: Knex.Config = {
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: 'agate_user',
    password: '********',
    database: 'agate'
  },
};

export default config;