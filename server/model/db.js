const mongoose = require('mongoose');
const cfenv = require('cfenv');
const logger = require('log4js').getLogger('db');
const localConfig = require('./../config/local');
const appenv = cfenv.getAppEnv({ vcap: localConfig });
const { services } = appenv;
const { credentials } = services['compose-for-mongodb'][0];
const { uri } = credentials;

let options = {
  useMongoClient: true
};

if (credentials.ca_certificate_base64) {
  const ca = [new Buffer(credentials.ca_certificate_base64, 'base64')];
  options = {
    ...options,
    ssl: true,
    sslValidate: true,
    sslCA: ca    
  };
}

mongoose.Promise = Promise;

mongoose.connect(uri, options, err => {
  if (err) {
    logger.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  }
});

mongoose.connection.on('connected', () => logger.info(`Mongoose connected to ${uri}`));
mongoose.connection.on('error', err => logger.error(`Mongoose connection error: ${err}`));
mongoose.connection.on('disconnected', () => logger.info(`Mongoose disconnected from: ${uri}`));
