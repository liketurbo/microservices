import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import pgClient from './pg';
import routes from './routes';

// Express setup
const app = express();
app.use(cors());
app.use(bodyParser());

pgClient.on('error', () => console.log('lost pg connection'));
pgClient
  .query('CREATE TABLE IF NOT EXISTS values (number INT)')
  .catch(err => console.log(err));

routes(app);

app.listen(5000, () => {
  console.log('Listening on port 5000');
});
