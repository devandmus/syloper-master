import Request from './request';

const getCustomers = () => Request('/api/customers').then((res) => res.data);

const getCustomerById = (id) =>
  Request(`/api/customers/detail/${id}`).then((res) => res.data);

const createCustomer = (data) =>
  Request('/api/customers/create', {
    method: 'POST',
    data,
  }).then((response) => response.data);

const updateCustomer = (id, data) =>
  Request(`/api/customers/update/${id}`, {
    data,
    method: 'PUT',
  }).then((response) => response.data);

const deleteCustomer = (id) =>
  Request(`/api/customers/delete/${id}`, {
    method: 'DELETE',
  }).then((response) => response.data);

export default {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
