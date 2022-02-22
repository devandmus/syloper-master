const Router = require('koa-router');
const healthRouter = require('./router/health.router');
const userRouter = require('./router/user.router');

const routes = new Router();

routes.use('/health', healthRouter.routes());
routes.use('/api', userRouter.routes());

module.exports = routes;
