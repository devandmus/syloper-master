import Request from './request';

const getProject = (id) =>
  Request(`/api/bff/project-detail/${id}`).then((res) => res.data);

export default {
  getProject,
};
