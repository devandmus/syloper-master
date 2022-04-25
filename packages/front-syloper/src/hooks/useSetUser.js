import { useContext } from 'react';
import { decodeToken } from 'react-jwt';
import AppContext from '../contexts/App';
import { setStorageUser, setStorageToken } from '../services/helpers';

const useSetUser = () => {
  if (typeof window === 'undefined') return false;
  const { setUser } = useContext(AppContext);
  return (token) => {
    const user = decodeToken(token);
    setStorageToken(token);
    setStorageUser(user);
    setUser(user);
  };
};

export default useSetUser;
