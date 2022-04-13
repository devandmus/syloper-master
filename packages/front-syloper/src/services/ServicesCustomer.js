import Request from './request';

const getCustomers = () => Request('/api/customer').then((res) => res.data);

const getCustomerById = (id) =>
  Request(`/api/customers/detail/${id}`).then((res) => res.data);

const createCustomer = (data) =>
  Request('/api/tasks/create', {
    method: 'POST',
    data,
  }).then((response) => response.data);

const updateCustomer = (id, data) =>
  Request(`/api/tasks/update/${id}`, {
    data,
    method: 'PUT',
  }).then((response) => response.data);

const deleteCustomer = (id) =>
  Request(`/api/tasks/delete/${id}`, {
    method: 'DELETE',
  }).then((response) => response.data);

export default {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
