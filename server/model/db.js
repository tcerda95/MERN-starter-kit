const mongoose = require('mongoose');
const logger = require('log4js').getLogger('db');

const url = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URL : 'mongodb://localhost/mern-dev';

/*
  Additional options may need to be set for a production environment such as:
  ssl
  sslValidate
  sslCA
*/

const options = { useNewUrlParser: true };

const errHandler = err => {
  if (err) {
    logger.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  }
};

mongoose.Promise = Promise;

mongoose.connection.on('connected', () => logger.info(`Mongoose connected to ${url}`));
mongoose.connection.on('error', errHandler);
mongoose.connection.on('disconnected', () => logger.info(`Mongoose disconnected from: ${url}`));

mongoose.connect(url, options, errHandler);
