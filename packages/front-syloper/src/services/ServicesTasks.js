import Request from './request';

const getTasks = () => Request('/api/tasks').then((res) => res.data);

export default {
  getTasks,
};
