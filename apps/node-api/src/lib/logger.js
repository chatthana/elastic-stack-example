const path = require('path');
const winston = require('winston');
const eccFormat = require('@elastic/ecs-winston-format');
const ecsFormat = require('@elastic/ecs-winston-format');

const loggerInstance = winston.createLogger({
  level: 'info',
  format: ecsFormat(),
  transports: [
    new winston.transports.File({ filename: path.resolve(__dirname, '..', '..', 'logs/service.log') })
  ]
});

module.exports = loggerInstance;