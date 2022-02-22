const Router = require('koa-router');
const handler = require('../handler/user.handler');

const userRouter = new Router({ prefix: '/user' });

userRouter.post('/login', handler.login);
userRouter.get('/list', handler.list);


module.exports = userRouter;
