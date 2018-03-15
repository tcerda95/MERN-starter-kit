const appName = require('./../package').name;
const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const log4js = require('log4js');
const localConfig = require('./config/local.json');
const path = require('path');
const serveStatic = require('serve-static');
const revUtils = require('./services/revUtils');
const cwd = process.cwd();

const logger = log4js.getLogger(appName);
const app = express();

app.use(log4js.connectLogger(logger, { level: process.env.LOG_LEVEL || 'info' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression());

// Initialize database connection
require('./model/db');

// Set API endpoint
const apiRouter = require('./routers/api');
app.use('/api', apiRouter);

if (process.env.NODE_ENV === 'production') {
  // Serve static revved files with uncoditional cache
  app.use(serveStatic(path.join(cwd, 'build'), {
    index: false,
    setHeaders: (res, path) => {
      if (revUtils.isRevved(path))
        res.setHeader('Cache-Control', 'public, immutable, max-age=31536000');      
    }
  }));

  // Route any non API and non static file to React Client Router for SPA development
  app.use((req, res) => {
    res.sendFile(path.join(cwd, 'build', 'index.html'));
  });  
}

// Fallback to 404
app.use((req, res) => {
  res.status(404);
  res.json({ message: '404 - Not Found' });
});

const port = process.env.PORT || localConfig.port;
app.listen(port, () => {
  logger.info(`CWD: ${cwd}`);
  logger.info(`Server listening on http://localhost:${port}/appmetrics-dash`);  
  logger.info(`Server listening on http://localhost:${port}`);
});
