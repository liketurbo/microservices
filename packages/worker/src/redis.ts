import redis from 'redis';

import { redisHost, redisPort } from './keys';

export const client = redis.createClient({
  host: redisHost,
  port: redisPort,
  retry_strategy: () => 1000
});

export const publisher = client.duplicate();
