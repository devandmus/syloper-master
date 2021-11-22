const controller = require('./health.controller');
const Router = require('koa-router');

const healthRouter = new Router({ prefix: '/health' });

healthRouter.get('/', controller);

module.exports = healthRouter;
