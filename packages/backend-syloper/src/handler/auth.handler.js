const emailTasks = require('../../email/tasks');
const {
  getUser,
  createPasswordToken,
  passwordTokenValidator,
  setNewPassword,
} = require('../controller/users.controller');

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

const passwordRecovery = async ctx => {
  const email = ctx.request.body["email"];
  const user = await createPasswordToken(email);
  if (user)
    await emailTasks.PasswordRecovery({
      email,
      passwordTokenReset: user.passwordTokenReset
    });
  ctx.status = 200;
  ctx.body = { message: 'sended' };
}

const setPassword = async ctx => {
  const method = ctx.request.method;
  try{
    const token = await passwordTokenValidator(ctx.params.token);
    const isValid = token.exp > Date.now();
    if (!isValid) throw new Error('Invalid Token');
    if (method === 'POST') {
      const password = ctx.request.body["password"];
      await setNewPassword({
        password,
        email: token.email,
      });
      ctx.body = { passwordRecovered: true }
    } else {
      ctx.body = { validToken: true };
    }
    ctx.status = 200;
  }
  catch (err) {
    ctx.status = 403;
    ctx.body = { validToken: false };
  }
}

module.exports = {
  login,
  passwordRecovery,
  setPassword,
}
