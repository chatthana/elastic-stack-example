const express = require('express');
const bodyParser = require('body-parser');
const loggerInstance = require('./lib/logger');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/healthz', (req, res) => {
  loggerInstance.info('Health check endpoint visited');
  return res.json({ message: 'ok' });
});

app.listen(3000, () => {
  loggerInstance.info('The application is running on the port 3000');
});