const commonController = require('../controller/common.controller');
const projectModel = require('../../database/models/Project.model');
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


module.exports = {
  employeesRanking,
  projectDetail,
  userDashboard,
}
