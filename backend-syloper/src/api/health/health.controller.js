const health = ctx => {
  const { status, ...body } = {
    status: 200,
    info: {
      nodeVersion: process.version,
      memory: process.memoryUsage(),
      pid: process.pid,
      uptime: process.uptime(),
      environment: process.env.NODE_ENV,
      appPackage: process.env.npm_package_name,
      appVersionPackage: process.env.npm_package_version,
    },
  };

  ctx.status = status;
  ctx.body = body;
}

module.exports = health;
