import Request from './request';

const getTasks = () => Request('/api/tasks').then((res) => res.data);

const createTask = () =>
  Request({
    url: '/api/tasks/create',
    method: 'POST',
  }).then((response) => response.data);

const putTask = (data) =>
  Request({
    url: '/api/tasks/put',
    data,
    method: 'PUT',
  }).then((response) => response.data);

const updateTask = (data) =>
  Request({
    url: '/api/tasks/put',
    data,
    method: 'PUT',
  }).then((response) => response.data);

const deleteTask = (data) =>
  Request({
    url: '/api/tasks/put',
    data,
    method: 'DELETE',
  }).then((response) => response.data);

export default {
  getTasks,
  createTask,
  putTask,
  updateTask,
  deleteTask,
};
