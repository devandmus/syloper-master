import Request from './request';

const getResponsibles = () =>
  Request('/api/responsible-profile').then((res) => res.data);

const getResponsibleTypesById = (id) =>
  Request(`/api/responsible-profile/detail/${id}`).then(
    (response) => response.data
  );

const createResponsibleTypes = (data) =>
  Request('/api/responsible-profile/create', {
    method: 'POST',
    data,
  }).then((response) => response.data);

const updateResponsibleTypes = (id, data) =>
  Request(`/api/responsible-profile/update/${id}`, {
    method: 'PUT',
    data,
  }).then((response) => response.data);

const deleteResponsibleTypes = (id) =>
  Request(`/api/responsible-profile/delete/${id}`, {
    method: 'DELETE',
  }).then((response) => response);

export default {
  getResponsibles,
  updateResponsibleTypes,
  getResponsibleTypesById,
  createResponsibleTypes,
  deleteResponsibleTypes,
};
