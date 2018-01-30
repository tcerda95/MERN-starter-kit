require('appmetrics-dash').attach();
require('appmetrics-prometheus').attach();

const appName = require('./../package').name;
const express = require('express');
const bodyParser = require('body-parser');
const log4js = require('log4js');
const localConfig = require('./config/local.json');
const path = require('path');
const cfenv = require('cfenv');
const logger = log4js.getLogger(appName);
const app = express();

app.use(log4js.connectLogger(logger, { level: process.env.LOG_LEVEL || 'info' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./model/db');  // initialize database connection
require('./routers/routes')(app);

const port = process.env.PORT || localConfig.port;
app.listen(port, function(){    
    logger.info(`MongoDbExpressReactNodeQOEJR listening on http://localhost:${port}/appmetrics-dash`);  
    logger.info(`MongoDbExpressReactNodeQOEJR listening on http://localhost:${port}`);
});

app.use(function (req, res, next) {
    res.sendFile(path.join(__dirname, '../public/assets', '404.html'));
})

app.use(function (err, req, res, next) {
    res.sendFile(path.join(__dirname, '../public/assets', '500.html'));
})
