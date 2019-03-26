import { Pool } from 'pg';

import { pgDatabase, pgHost, pgPassword, pgPort, pgUser } from './keys';

const pgClient = new Pool({
  user: pgUser,
  password: pgPassword,
  database: pgDatabase,
  host: pgHost,
  port: pgPort
});

export default pgClient;
