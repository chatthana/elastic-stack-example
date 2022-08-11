const express = require('express');
const bodyParser = require('body-parser');
const logger = require('./lib/logger');
const playerRouter = require('./routes/players');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/healthz', (req, res) => {
  logger.info('Health check endpoint visited');
  return res.json({ message: 'ok' });
});

app.use('/players', playerRouter);

app.listen(3000, () => {
  logger.info('The application is running on the port 3000');
});