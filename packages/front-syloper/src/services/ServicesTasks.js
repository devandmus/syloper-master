import Request from './request';

const getTasks = () => Request('/api/tasks').then((res) => res.data);

const getTasksByProject = (id) =>
  Request(`/api/tasks/${id}`).then((res) => res.data);

const createTask = (data) =>
  Request('/api/tasks/create', {
    method: 'POST',
    data,
  }).then((response) => response.data);

const updateTask = (id, data) =>
  Request(`/api/tasks/update/${id}`, {
    data,
    method: 'PUT',
  }).then((response) => response.data);

const deleteTask = (id) =>
  Request(`/api/tasks/delete/${id}`, {
    method: 'DELETE',
  }).then((response) => response.data);

export default {
  getTasks,
  getTasksByProject,
  createTask,
  updateTask,
  deleteTask,
};
