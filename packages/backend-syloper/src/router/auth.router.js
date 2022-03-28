const Router = require('koa-router');
const handler = require('../handler/auth.handler');

const authRouter = new Router({ prefix: '/auth' });

authRouter.post('/login', handler.login);
authRouter.post('/password-recovery', handler.passwordRecovery);
authRouter.get('/set-password/:token', handler.setPassword);
authRouter.post('/set-password/:token', handler.setPassword);

module.exports = authRouter;
