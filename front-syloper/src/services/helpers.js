const USER_KEY = 'user';
const TOKEN_KEY = 'token';

const getStorageUser = () => {
  const user = window.localStorage.getItem(USER_KEY);
  return user ? JSON.parse(user) : null;
};

const setStorageUser = (user) => {
  window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  return user;
};

const getStorageToken = () => window.localStorage.getItem(TOKEN_KEY);

const setStorageToken = (token) => {
  window.localStorage.setItem(TOKEN_KEY, token);
};

export {
  USER_KEY,
  TOKEN_KEY,
  getStorageUser,
  setStorageUser,
  getStorageToken,
  setStorageToken,
};
