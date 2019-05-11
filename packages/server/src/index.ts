import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import pgClient from './pg';
import { client, publisher } from './redis';

// Express setup
const app = express();
app.use(cors());
app.use(bodyParser());

// Postgres initialization
pgClient.on('error', () => console.log('lost pg connection'));
pgClient
  .query('CREATE TABLE IF NOT EXISTS values (number INT)')
  .catch(err => console.log(err));

// Routes
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

// Initialize to listen on port 5000
app.listen(5000, () => {
  console.log('Listening on port 5000');
});
