const Router = require('koa-router');
const handler = require('../handler/auth.handler');

const authRouter = new Router({ prefix: '/auth' });

authRouter.post('/login', handler.login);

module.exports = authRouter;
