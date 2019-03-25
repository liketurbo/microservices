import fib from './fib';
import { client, publisher } from './redis';

publisher.on('message', (_, msg) => {
  client.hset('values', msg, fib(parseInt(msg)).toString());
});

publisher.subscribe('insert');
