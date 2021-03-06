import axios from 'axios';
import { getStorageToken } from './helpers';

const API = 'https://syloper.herokuapp.com';
// 'http://localhost:8080';

const Request = (url, { method = 'GET', data = {} } = {}) => {
  const token = getStorageToken();
  const auth = token ? { Authorization: `Bearer ${token}` } : {};
  return axios({
    validateStatus: () => true,
    method,
    url: API + url,
    headers: {
      'Content-Type': 'application/json',
      ...auth,
    },
    data: JSON.stringify(data),
  })
    .then((res) => res)
    .catch((err) => {
      return Promise.reject(err);
    });
};

export default Request;
