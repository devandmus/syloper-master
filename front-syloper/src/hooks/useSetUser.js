import { useContext } from 'react';
import AppContext from '../contexts/App';
import { setStorageUser, setStorageToken } from '../services/helpers';
import { decodeToken } from 'react-jwt';

const setUseUser = () => {
  if (typeof window === 'undefined') return false;
  const { setUser } = useContext(AppContext);
  return (token) => {
    const user = decodeToken(token);
    setStorageToken(token);
    setStorageUser(user);
    setUser(user);
  };
};

export default setUseUser;
