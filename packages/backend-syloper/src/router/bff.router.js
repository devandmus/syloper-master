const Router = require('koa-router');
const handler = require('../handler/bff.handler');

const bffRouter = new Router({ prefix: '/bff' });

bffRouter.get('/user-dashboard', handler.userDashboard);

bffRouter.get('/project-detail/:id', handler.projectDetail);

bffRouter.get('/ranking/', handler.employeesRanking);

module.exports = bffRouter;
