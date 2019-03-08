import express from 'express';
import toInt from 'lodash/toInteger';
import toStr from 'lodash/toString';
import redis from 'redis';
import { promisify } from 'util';

const app = express();

const client = redis.createClient({
  host: 'redis-server',
  port: 6379
});
const clientAsync = {
  get: promisify(client.get).bind(client),
  set: promisify(client.set).bind(client)
};

clientAsync.set('visits', '0');

app.get('/', async (_, res) => {
  let visits = toInt(await clientAsync.get('visits'));
  clientAsync.set('visits', toStr(++visits));
  visits = toInt(await clientAsync.get('visits'));

  res.send(`Number of visits is ${visits}`);
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
