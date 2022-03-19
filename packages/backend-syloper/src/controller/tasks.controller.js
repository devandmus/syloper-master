const Tasks = require("../../database/models/Task.model");


const getTasksByProjectId = async (project_id) =>
  await Tasks.find({project_id})

module.exports = {getTasksByProjectId};