const tasksController = require('../controller/tasks.controller');

const getTasksByProjectId = async (ctx) => {
    const { id } = ctx.params;
    const { status, body } = await tasksController.getTasksByProjectId(id);
    ctx.status = status;
    ctx.body = body;
  
}

module.exports = {
    getTasksByProjectId

};