require('../connection');

// MODELS
const UserModel = require('../models/User.model');
const TaskModel = require('../models/Task.model');
const CustomerModel = require('../models/Customer.model');
const ProjectStatusModel = require('../models/ProjectStatus.model');

// DATA
const UserData = require('./users.json');
const TaskData = require('./tasks.json');
const CustomerData = require('./customers.json');
const ProjectStatusData = require('./project-status.json');


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
  await hydrateFromData(ProjectStatusModel, ProjectStatusData);
  await process.exit();
};


hydrate();
