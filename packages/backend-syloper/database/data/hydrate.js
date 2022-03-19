require('../connection');

// MODELS
const UserModel = require('../models/User.model');
const TaskModel = require('../models/Task.model');
const CustomerModel = require('../models/Customer.model');
const ProjectModel = require('../models/Project.model');
const ProjectStatusModel = require('../models/ProjectStatus.model');
const TaskStatusModel = require('../models/TaskStatus.model');

// DATA
const UserData = require('./users.json');
const TaskData = require('./tasks.json');
const CustomerData = require('./customers.json');
const ProjectData = require('./projects.json');
const ProjectStatusData = require('./project-status.json');
const TasksStatusData = require('./tasks-status.json');


const hydrateFromData = async (model, data) => {
  const collection = (model.collection.collectionName);
  const promises = data.map(async entry => {
    const query = collection === 'users' ? { email: entry.email } : entry;
    const exist = Boolean(await model.findOne(query));
    if (!exist) await new model({ ...entry }).save();
  });
  await Promise.all(promises).then(() => {
    console.log('Done', model)
  })
}


const hydrate = async () => {
  await hydrateFromData(UserModel, UserData);
  await hydrateFromData(TaskModel, TaskData);
  await hydrateFromData(CustomerModel, CustomerData);
  await hydrateFromData(ProjectModel, ProjectData);
  await hydrateFromData(ProjectStatusModel, ProjectStatusData);
  await hydrateFromData(TaskStatusModel, TasksStatusData);
  await process.exit();
};


hydrate();
