const Koa = require('koa');
const logger = require('koa-logger')
const healthRouter = require('./api/health');

const app = new Koa();

// Middlewares
app.use(logger());

// Routes
app.use(healthRouter);

module.exports = app;
