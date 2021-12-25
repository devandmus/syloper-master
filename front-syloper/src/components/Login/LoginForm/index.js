import { Link } from 'gatsby';
import React from 'react';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import {
  Form,
  Forgot,
  Sign,
} from './styles/LoginFormStyled';

const LoginForm = () => {
  return (
    <Form>
      <Input placeholder="Email Address" type="text" />
      <Input placeholder="Password" type="password" />
      <Forgot>
        <Link to="/recover-password">Forgot Password?</Link>
      </Forgot>
      <Button>
        Logic
      </Button>
      <Sign>
        Don't have an account? 
        <Link to="/"> Sign In</Link>
      </Sign>
    </Form>
  );
};

export default LoginForm;
