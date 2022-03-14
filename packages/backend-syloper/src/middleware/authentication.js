const jwt = require('jsonwebtoken');
const config = require('../../config');

// acá pueden listar los urls de acceso sin token
const publicPaths = [
  '/',
  '/health',
  '/api/auth/login'
];

const authentication = (ctx, next) => {
  const { authorization } = ctx.request.headers;
  const { url } = ctx.request;
  if (authorization !== null && typeof authorization !== 'undefined') {
    ctx.user = jwt.verify(
      authorization.replace("Bearer ", ""),
      config.JWT_SECRET
    );
  }
  if (publicPaths.includes(url) || ctx.user) {
    return next();
  }
  ctx.status = 403;
  ctx.body = { forbidden: true }
};

module.exports = authentication;
