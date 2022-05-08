require('../connection');
const updateController = require('../../src/controller/common.controller').putById;

// MODELS
const UserModel = require('../models/User.model');
const TaskModel = require('../models/Task.model');
const CustomerModel = require('../models/Customer.model');
const ProjectModel = require('../models/Project.model');
const ResponsibleProfile = require('../models/ResponsibleProfile.model');

// DATA
const UserData = require('./users.json');
const TaskData = require('./tasks.json');
const CustomerData = require('./customers.json');
const ProjectData = require('./projects.json');
const ResponsibleProfileData = require('./responsible-profiles.json');


const hydrateFromData = async (model, data) => {
  const collection = (model.collection.collectionName);
  const promises = data.map(async entry => {
    const query = collection === 'users' ? { email: entry.email } : entry;
    const exist = Boolean(await model.findOne(query));
    if (!exist) await new model({ ...entry }).save();
    else updateController(model, exist.id, { ...entry });
  });
  await Promise.all(promises).then(() => {
    console.log('Done', model)
  })
}


const hydrate = async () => {
  await hydrateFromData(UserModel, UserData);
  await hydrateFromData(CustomerModel, CustomerData);
  await hydrateFromData(ResponsibleProfile, ResponsibleProfileData);
  await hydrateFromData(ProjectModel, ProjectData);
  await hydrateFromData(TaskModel, TaskData);
  await process.exit();
};


hydrate();
