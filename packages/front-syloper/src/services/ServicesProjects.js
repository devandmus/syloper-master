import Request from './request';

const getProjects = () => Request('/api/projects').then((res) => res.data);

const getProjectDetail = (id) =>
  Request(`/api/projects/detail/${id}`).then((res) => res.data);

const createProject = (data) =>
  Request('/api/projects/create', {
    method: 'POST',
    data,
  }).then((response) => response.data);

const updateProject = (data) =>
  Request('/api/projects/put', {
    data,
    method: 'PUT',
  }).then((response) => response.data);

const deleteProject = (data) =>
  Request('/api/projects/put', {
    data,
    method: 'DELETE',
  }).then((response) => response.data);

export default {
  getProjects,
  getProjectDetail,
  createProject,
  updateProject,
  deleteProject,
};
