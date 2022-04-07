const emailTasks = require('../../email/tasks');
const commonController = require('../controller/common.controller');
const usersController = require('../controller/users.controller');


const Models = {
  customers: require('../../database/models/Customer.model'),
  tasks: require('../../database/models/Task.model'),
  users: require('../../database/models/User.model'),
  projects: require('../../database/models/Project.model'),
  'responsible-profile': require('../../database/models/ResponsibleProfile.model'),
  'task-status': require('../../database/models/TaskStatus.model'),
}


const list = async (ctx) => {
  const { model } = ctx.params;
  const { status, body } = await commonController.getAll(Models[model]);
  ctx.status = status;
  ctx.body = body;
}


const create = async (ctx) => {
  const { model } = ctx.params;
  const payload = ctx.request.body;
  const isUser = model === 'users';
  const { status, body } = await commonController.create(Models[model], {
    ...payload,
    ...(isUser && { password: 'misc-password' }),
  });
  if (isUser) {
    const email = payload.email;
    const user =
      await usersController.createPasswordToken(email);
    emailTasks.WelcomeNewMember({
      email,
      passwordTokenReset: user.passwordTokenReset,
    });
  }
  ctx.status = status;
  ctx.body = body;
}


const get = async (ctx) => {
  const { id, model } = ctx.params;
  const { status, body } = await commonController.getById(Models[model], id);
  ctx.status = status;
  ctx.body = body;
}


const update = async (ctx) => {
  const { id, model } = ctx.params;
  const payload = ctx.request.body;
  const { status, body } = await commonController.putById(Models[model], id, payload);
  ctx.status = status;
  ctx.body = body;
}


const remove = async (ctx) => {
  const { id, model } = ctx.params;
  const { status, body } = await commonController.deleteById(Models[model], id);
  ctx.status = status;
  ctx.body = body;
}


module.exports = {
  list,
  create,
  get,
  update,
  remove,
}
