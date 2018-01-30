require('appmetrics-dash').attach();
require('appmetrics-prometheus').attach();

const appName = require('./../package').name;
const express = require('express');
const bodyParser = require('body-parser');
const log4js = require('log4js');
const localConfig = require('./config/local.json');
const path = require('path');
const cfenv = require('cfenv');
const cwd = process.cwd();

const logger = log4js.getLogger(appName);
const app = express();

app.use(log4js.connectLogger(logger, { level: process.env.LOG_LEVEL || 'info' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Initialize database connection
require('./model/db');

// Serve static files
app.use(express.static(path.join(cwd, 'build')));

// Set API endpoint
const router = require('./routers/index');
app.use('/api', router);

// Route any non API and non static file to React Client Router for SPA development
app.use((req, res) => {
	res.sendFile(path.join(cwd, 'build', 'index.html'));
});

const port = process.env.PORT || localConfig.port;
app.listen(port, function(){
	logger.info(`CWD: ${cwd}`);
    logger.info(`MongoDbExpressReactNodeQOEJR listening on http://localhost:${port}/appmetrics-dash`);  
    logger.info(`MongoDbExpressReactNodeQOEJR listening on http://localhost:${port}`);
});

app.use(function (err, req, res, next) {
	logger.error(err.message);
	res.status(500);
	res.json({ message: err.message });
});
