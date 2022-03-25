import Request from './request';

const getProjects = () => Request('/api/projects').then((res) => res.data);

const getProjectDetail = (id) =>
  Request(`/api/projects/detail/${id}`).then((res) => res.data);

const createProject = (data) =>
  Request('/api/projects/create', {
    method: 'POST',
    data,
  }).then((response) => response.data);

const updateProject = (id, data) =>
  Request(`/api/projects/update/${id}`, {
    method: 'PUT',
    data,
  }).then((response) => response.data);

const deleteProject = (id, data) =>
  Request(`/api/projects/delete/${id}`, {
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
