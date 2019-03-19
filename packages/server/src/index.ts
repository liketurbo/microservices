import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

import routes from './routes';

// Express setup
const app = express();
app.use(cors());
app.use(bodyParser());

routes(app);

app.listen(5000, () => {
  console.log('Listening on port 5000');
});
