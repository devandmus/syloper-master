import Request from './request';

const getResponsibles = () => Request('/api/responsibleprofile').then((res) => res.data);

export default {
    getResponsibles,
};
