import Request from './request';

const getProjects = () => Request('/api/projects').then((res) => res.data);

const getProjectDetail = (id) =>
  Request(`/api/projects/detail/${id}`).then((res) => res.data);

const createProject = () =>
  Request({
    url: '/api/projects/create',
    method: 'POST',
  }).then((response) => response.data);

const putProject = (data) =>
  Request({
    url: '/api/projects/put',
    data,
    method: 'PUT',
  }).then((response) => response.data);

const updateProject = (data) =>
  Request({
    url: '/api/projects/put',
    data,
    method: 'PUT',
  }).then((response) => response.data);

const deleteProject = (data) =>
  Request({
    url: '/api/projects/put',
    data,
    method: 'DELETE',
  }).then((response) => response.data);

export default {
  getProjects,
  getProjectDetail,
  createProject,
  putProject,
  updateProject,
  deleteProject,
};
