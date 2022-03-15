const Router = require('koa-router');
const healthRouter = require('./router/health.router');
const commonRouter = require('./router/common.router');
const authRouter = require('./router/auth.router');

const routes = new Router();

routes.use('/health', healthRouter.routes());

routes.use('/api', commonRouter.routes());
routes.use('/api', authRouter.routes());

module.exports = routes;
