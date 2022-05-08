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

const deleteProject = (id) =>
  Request(`/api/projects/delete/${id}`, {
    method: 'DELETE',
  }).then(
    (response) => {
      return response;
    },
    (error) => {
      return error;
    }
  );

export default {
  getProjects,
  getProjectDetail,
  createProject,
  updateProject,
  deleteProject,
};
