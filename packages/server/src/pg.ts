import { Pool } from 'pg';

import { pgDatabase, pgHost, pgPassword, pgPort, pgUser } from './keys';

const pgClient = new Pool({
  user: pgUser,
  password: pgPassword,
  database: pgDatabase,
  host: pgHost,
  port: pgPort
});

pgClient.on('error', () => console.log('lost pg connection'));

pgClient
  .query('CREATE TABLE IF NOT EXISTS values (number INT)')
  .catch(err => console.log(err));

export default pgClient;
