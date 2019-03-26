import { Express } from 'express';

import pgClient from './pg';
import { client, publisher } from './redis';

const routes = (app: Express) => {
  app.get('/', (_, res) => {
    return res.send('Hello, World!');
  });

  app.get('/values/all', async (_, res) => {
    const values = await pgClient.query('SELECT * from values');

    return res.send(values.rows);
  });

  app.get('/values/current', async (_, res) => {
    client.hgetall('values', (_, values) => {
      return res.send(values);
    });
  });

  app.post('/values', async (req, res) => {
    const index = req.body.index;

    if (parseInt(index, 10) > 40) {
      return res.status(422).send('Index too high');
    }

    client.hset('values', index, '-1');
    publisher.publish('insert', index);

    pgClient.query('INSERT INTO values(number) VALUES($1)', [index]);

    return res.send({ working: true });
  });
};

export default routes;
