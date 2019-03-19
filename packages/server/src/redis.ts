import redis from 'redis';

import { redisHost, redisPort } from './keys';

const redisClient = redis.createClient({
  host: redisHost,
  port: redisPort,
  retry_strategy: () => 1000
});

export default redisClient;
