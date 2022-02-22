import React from 'react';
import LoginForm from '../LoginForm';
import { SyloperLogo } from '../../../images';
import LoginMainStyled from './styles/LoginMainStyled';

const LoginMain = () => {
  return (
    <LoginMainStyled>
      <div>
        <SyloperLogo />
      </div>
      <h2>Login</h2>
      <LoginForm />
    </LoginMainStyled>
  );
};

export default LoginMain;
