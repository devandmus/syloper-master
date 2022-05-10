const Tasks = require('../../database/models/Task.model');
const Users = require('../../database/models/User.model');
const commonController = require('./common.controller');


const getTasksByProjectId = async (project_id) =>
  await Tasks.find({project_id});


const getUsers = async () => await commonController.getAll(Users);


const getTasksByUser = (filter = {}, users) =>
  commonController.getAll(Tasks, filter).then(({
    body: tasks,
  }) =>
    tasks.reduce((acc, cur) => {
      const id = cur.task_responsible_user_id;

      if (acc[id] === undefined) {
        acc[id] = [cur]
      }
      else acc[id].push(cur);
      return acc;
    }, {})
  );


module.exports = { getTasksByProjectId, getTasksByUser, getUsers };
