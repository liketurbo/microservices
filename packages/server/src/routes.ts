import { Express } from 'express';
import { promisify } from 'util';

import pgClient from './pg';
import redisClient from './redis';

const hgetallAsync = promisify(redisClient.hgetall).bind(redisClient);

const routes = (app: Express) => {
  app.get('/', (_, res) => {
    res.send('Hello, World!');
  });

  app.get('/values/all', async (_, res) => {
    const values = await pgClient.query('SELECT * from values');

    res.send(values.rows);
  });

  app.get('/values/current', async (_, res) => {
    const values = await hgetallAsync('values');

    res.send(values);
  });

  app.post('/values', async (req, res) => {
    const index = req.body.index;

    if (parseInt(index, 10) > 40) {
      return res.status(422).send('Index too high');
    }

    redisClient.hset('values', index, '-1');
    redisClient.publish('insert', index);

    pgClient.query('INSERT INTO values(number) VALUES($1)', [index]);

    return res.send({ working: true });
  });
};

export default routes;
