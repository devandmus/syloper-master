const Router = require('koa-router');
const handler = require('../handler/health.handler');

const healthRouter = new Router();

healthRouter.get('/', handler);

module.exports = healthRouter;
