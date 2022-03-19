import Request from './request';

const getTasksStatus = () =>
  Request('/api/task-status').then((res) => res.data);

export default {
  getTasksStatus,
};
