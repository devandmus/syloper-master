const Router = require('koa-router');
const handler = require('../handler/tasks.handler');

const tasksRouter = new Router();

tasksRouter.get('/tasks/:id', handler.getTasksByProjectId);

module.exports = tasksRouter;
