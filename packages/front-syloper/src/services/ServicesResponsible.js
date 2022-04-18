import Request from './request';

const getResponsibles = () =>
  Request('/api/responsible-profile').then((res) => res.data);

const createResponsibleTypes = (data) =>
  Request('/api/responsible-profile/create', {
    method: 'POST',
    data,
  }).then((response) => response.data);

export default {
  getResponsibles,
  createResponsibleTypes,
};
