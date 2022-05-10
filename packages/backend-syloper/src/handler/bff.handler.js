const commonController = require('../controller/common.controller');
const projectModel = require('../../database/models/Project.model');
const customerModel = require('../../database/models/Customer.model');
const taskModel = require('../../database/models/Task.model');
const responsibleModel = require('../../database/models/ResponsibleProfile.model');
const helpers = require('../helpers/project.helper');


const userDashboard = async (ctx) => {
  const { status, body: rawProjects } = await commonController.getAll(projectModel);
  const { globalStatus, projects } = await helpers.ProjectContext(rawProjects);

  ctx.status = status;
  ctx.body = { globalStatus, projects };
};


const projectDetail = async (ctx) => {
  const { id } = ctx.params;
  const { status, body: rawProject } = await commonController.getById(projectModel, id);

  const { globalStatus, projects = [{}] } = await helpers.ProjectContext([rawProject], true);

  const project_status =
    globalStatus.completed === 1 && 'Completed'
      || globalStatus.in_progress === 1 && 'In progress'
      || 'Ready to Start';

  const {
    progress = 0,
    responsibles = [],
    tasks = [],
    tasks_left = 0,
  } = projects[0];

  const {
    customer_id,
    project_title,
    project_description,
    project_date,
    project_due_date,
  } = rawProject;

  const response = {
    customer_id,
    id,
    progress,
    project_date,
    project_description,
    project_due_date,
    project_status,
    project_title,
    tasks_left,
    tasks,
    responsibles,
  };

  ctx.status = status;
  ctx.body = response;
};


const employeesRanking = async (ctx) => {
  const response = await helpers.WorkedTasks();
  const ranking = response.ranking.map(el => ({
    hours: el.hours,
    ...response.metadata.employees.find(emp => emp.id === el.responsibleId),
  }))
    .sort((a, b) => b.hours - a.hours)
  ctx.status = 200;
  ctx.body = ranking;
};


const portfolio = async (ctx) => {
  const response = await Promise.all([
    commonController.getAll(projectModel),
    commonController.getAll(customerModel),
    commonController.getAll(taskModel),
    commonController.getAll(responsibleModel),
  ])
    .then(([
      { body: projects },
      { body: customers },
      { body: tasks },
      { body: responsibles },
    ]) => projects.map(project => {
      const {
        project_title,
        customer_id,
        id: project_id,
        project_status,
      } = project;
      const steps = project_status.length;
      const { customer_full_name: client } =
        customers.find(el => el.id === customer_id);
      const projectTasks = tasks.filter(el => el.project_id === project_id);

      const estimated_hours = projectTasks
        .reduce((acc, cur) => acc + cur.estimated_hours, 0);

      const worked_hours = projectTasks
        .reduce((acc, cur) =>
          (acc + cur.estimated_hours * (cur.status / steps).toFixed(2)), 0);

      const estimated_incomes = projectTasks.reduce((acc, cur) => {
        const responsible = responsibles
          .find(el => el.id === cur.responsible_profile_id);
        return acc + (
          responsible
            ? responsible.hourly_cost * cur.estimated_hours
            : 0
          );
        }, 0);

      const price_per_hour = estimated_incomes / estimated_hours;

      const real_incomes = worked_hours * price_per_hour;

      return {
        client,
        estimated_hours,
        estimated_incomes,
        price_per_hour,
        project_title,
        real_incomes,
        worked_hours,
      }
    }));

  ctx.status = 200;
  ctx.body = response;
}

module.exports = {
  employeesRanking,
  projectDetail,
  userDashboard,
  portfolio,
}
