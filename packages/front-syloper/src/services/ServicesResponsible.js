import Request from './request';

const getResponsibles = () => Request('/api/responsible-profile').then((res) => res.data);

export default {
    getResponsibles,
};
