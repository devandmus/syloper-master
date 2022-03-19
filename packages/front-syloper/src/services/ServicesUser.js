import Request from './request';

const getUsers = () => Request('/api/users').then((res) => res.data);

export default {
  getUsers,
};
