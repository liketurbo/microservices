import redis from 'redis';

import fib from './fib';
import { redisHost, redisPort } from './keys';

const client = redis.createClient({
  host: redisHost,
  port: redisPort,
  retry_strategy: () => 1000
});

const clone = client.duplicate();

clone.on('message', (_, msg) => {
  client.hset('values', msg, fib(msg));
});

clone.subscribe('insert');
