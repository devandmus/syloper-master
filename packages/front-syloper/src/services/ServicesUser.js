import Request from './request';

const getUsers = () => Request('/api/users').then((res) => res.data);

const getUserById = (id) =>
  Request(`/api/users/detail/${id}`).then((res) => res.data);

const createUser = (data) =>
  Request('/api/users/create', {
    method: 'POST',
    data,
  }).then((response) => response.data);

const updateUser = (id, data) =>
  Request(`/api/users/update/${id}`, {
    data,
    method: 'PUT',
  }).then((response) => response.data);

const deleteUser = (id) =>
  Request(`/api/users/delete/${id}`, {
    method: 'DELETE',
  }).then((response) => response.data);


export default {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
