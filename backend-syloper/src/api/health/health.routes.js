const controller = require('./health.controller');
const Router = require('koa-router');
const ctrlUsers = require('./user_controller');
const ctrlCustomers = require('./customer_controller');
const koaBody = require('koa-body');

const healthRouter = new Router({ prefix: '/health' });

healthRouter.get('/', controller);

healthRouter.post('/register', koaBody(), ctrlUsers.register);

healthRouter.post('/login', koaBody(), ctrlUsers.login);

healthRouter.get('/listar', ctrlUsers.listar);

healthRouter.post('/createcustomer', koaBody(), ctrlCustomers.register);

module.exports = healthRouter;