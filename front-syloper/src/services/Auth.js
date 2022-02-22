import { USER_KEY, TOKEN_KEY } from './helpers';
import Request from './request';

const loginUser = ({ email, password }) =>
  Request({
    url: '/api/user/login',
    data: { email, password },
    method: 'POST',
  }).then((res) => {
    if (res.status === 200 && res.data.accessToken) {
      return res.data.accessToken;
    }
    return false;
  });

const logout = () => {
  window.localStorage.removeItem(USER_KEY);
  window.localStorage.removeItem(TOKEN_KEY);
  window.location.replace('/');
};

export default {
  loginUser,
  logout,
};
