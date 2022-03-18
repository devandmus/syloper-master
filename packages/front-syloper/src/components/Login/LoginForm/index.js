import React, { useState } from 'react';
import { Link } from 'gatsby';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import { Form, Forgot, Sign } from './styles/LoginFormStyled';
import Auth from '../../../services/ServicesAuth';
import useSetUser from '../../../hooks/useSetUser';

const LoginForm = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const setUser = useSetUser();
  const handleLogin = async (e) => {
    e.preventDefault();
    const token = await Auth.loginUser({ email, password });
    if (token) setUser(token);
  };
  return (
    <Form onSubmit={handleLogin}>
      <Input
        placeholder="Email Address"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Forgot>
        <Link to="/recover-password">Forgot Password?</Link>
      </Forgot>
      <Button>Login</Button>
    </Form>
  );
};

export default LoginForm;
