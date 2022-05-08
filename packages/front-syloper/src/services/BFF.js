import Request from './request';

const getProject = (id) =>
  Request(`/api/bff/project-detail/${id}`).then((res) => res.data);

const getUserDashboard = () =>
  Request(`/api/bff/user-dashboard`).then((res) => res.data);

const getEmployeesRanking = () =>
  Request(`/api/bff/ranking`).then((res) => res.data);

const getPortfolio = () =>
  Request(`/api/bff/portfolio`).then((res) => res.data);

export default {
  getProject,
  getUserDashboard,
  getEmployeesRanking,
  getPortfolio,
};
