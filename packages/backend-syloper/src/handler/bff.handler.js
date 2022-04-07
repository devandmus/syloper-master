const commonController = require('../controller/common.controller');
const projectModel = require('../../database/models/Project.model');
const taskModel = require('../../database/models/Task.model');
const userModel = require('../../database/models/User.model');


const userDashboard = async (ctx) => {
  const { status, body: rawProjects } = await commonController.getAll(projectModel);
  const projectsId = rawProjects.map(p => p.id);
  const promises = projectsId.map(project_id =>
    commonController.getAll(taskModel, { project_id }));

  const globalStatus = {
    ready_to_start: 0,
    in_progress: 0,
    completed: 0,
    total_projects: 0,
  }

  const projects = await Promise.all(promises)
    .then(async values => {
      const responseArray = [];

      for (const id of projectsId) {
        const index = projectsId.indexOf(id);
        const projectStatusDivisor = rawProjects[index].project_status.length - 1;
        const tasks = values[index].body;
        const hours = tasks.reduce((sum, instance) => instance.estimated_hours + sum, 0);
        const progress = tasks.length === 0 ? 0 : Math.floor(
          (tasks.reduce((sum, instance) =>
                sum + ((instance.status / projectStatusDivisor) * instance.estimated_hours),
              0) / hours
          ) * 100
        );

        const responsibles = await Promise.all(tasks.map(instance =>
          commonController.getById(userModel, instance.task_responsible_user_id))
        )
          .then(values => values);

        globalStatus.total_projects += 1;

        if (progress === 0) globalStatus.ready_to_start += 1;
        else if (progress === 100) globalStatus.completed += 1;
        else globalStatus.in_progress += 1;

        responseArray.push({
          ...rawProjects[index],
          progress,
          responsibles,
          tasks_left: tasks.length,
        });
      }

      return responseArray;
    })

  ctx.status = status;
  ctx.body = { projects, ...globalStatus };
}


module.exports = {
  userDashboard
}
