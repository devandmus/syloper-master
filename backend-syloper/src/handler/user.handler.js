const {
  getUser,
  getUsers,
} = require('../controller/user.controller');

const login = async ctx => {
  const email = ctx.request.body["email"];
  const password = ctx.request.body["password"];
  const {status, ...body} = await getUser({
    email,
    password,
  });
  ctx.status = status;
  ctx.body = body;
};

const list = async ctx => {
  const {status, ...body} = await getUsers();
  ctx.status = status;
  ctx.body = body;
};

module.exports = {
  login,
  list,
}
