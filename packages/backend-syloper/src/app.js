const Koa = require('koa');
const logger = require('koa-logger')
const koaBody = require('koa-body');
const appRoutes = require('./routes');
const cors = require('@koa/cors');
const authentication = require('./middleware/authentication');

const app = new Koa();

// Middlewares
app.use(cors());
app.use(koaBody());
app.use(logger());
app.use(authentication);

// Routes
app.use(appRoutes.routes());

module.exports = app;
