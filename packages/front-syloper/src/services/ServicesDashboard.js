import Request from './request';

const getDashboardData = () => Request('/api/bff/user-dashboard').then((res) => res.data);

export default { getDashboardData };

