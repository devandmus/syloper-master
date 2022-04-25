const commonController = require('../controller/common.controller');
const userModel = require('../../database/models/User.model');
const taskModel = require('../../database/models/Task.model');
const projectModel = require('../../database/models/Project.model');
const customerModel = require('../../database/models/Customer.model');


const ProjectContext = async (rawProjects, withTasks) => {
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
          .then(values => values
            .map(el => el.body)
            .reduce((acc, cur) =>
              acc.find(el => el.email === cur.email) ? acc : acc.concat(cur)
              , [])
          );

        globalStatus.total_projects += 1;

        if (progress === 0) globalStatus.ready_to_start += 1;
        else if (progress === 100) globalStatus.completed += 1;
        else globalStatus.in_progress += 1;

        responseArray.push({
          ...rawProjects[index],
          progress,
          responsibles,
          tasks_left: tasks.length,
          ...(withTasks ? { tasks } : {})
        });
      }

      return responseArray;
    });

  return { globalStatus, projects };
};


const WorkedTasks = async () => {
  const [tasks, projects, employees, customers] = await Promise.all([
    commonController.getAll(taskModel),
    commonController.getAll(projectModel),
    commonController.getAll(userModel),
    commonController.getAll(customerModel),
  ])
    .then(values => values.map(res => res.body));

  const projectsData = projects.map(p => ({
    project_id: p.id,
    status: p.project_status.length - 1,
    customer_id: p.customer_id,
  }));

  const ranking = tasks.map(task => {
    const responsibleId = task.task_responsible_user_id;
    const project = projectsData.find(el => el.project_id === task.project_id);
    const hours =
      task.estimated_hours - (
        ((project.status - task.status) / project.status) * task.estimated_hours
      );
    return {
      hours,
      responsibleId,
      customerId: project.customer_id,
    }
  })
    .reduce((acc, cur) => {
      const index = acc.findIndex(el => el.responsibleId === cur.responsibleId);
      if (index < 0) {
        acc.push({
          hours: cur.hours,
          responsibleId: cur.responsibleId,
          customers: [cur.customerId],
        })
      }
      else {
        acc[index].hours += cur.hours;
        if (!acc[index].customers.find(id => id === cur.customerId))
          acc[index].customers.push(cur.customerId);
      }
      return acc;
    }, []);

  return {
    ranking,
    metadata: {
      employees,
      customers,
    },
  }
};


module.exports = {
  ProjectContext,
  WorkedTasks,
}
