const Router = require('koa-router');
const handler = require('../handler/common.handler');

const commonRouter = new Router();

commonRouter.get('/:model', handler.list);
commonRouter.post('/:model/create', handler.create);
commonRouter.get('/:model/detail/:id', handler.get);
commonRouter.put('/:model/update/:id', handler.update);
commonRouter.delete('/:model/delete/:id', handler.remove);

module.exports = commonRouter;
