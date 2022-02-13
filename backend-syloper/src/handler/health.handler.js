const healthController = require('../controller/health.controller');

const healthHandler = ctx => {
  const { status, ...body } = healthController();
  ctx.status = status;
  ctx.body = body;
}

module.exports = healthHandler;
