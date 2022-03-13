import React from 'react';
import LoginStyled from './styles/LoginStyled';
import LoginMain from './LoginMain';
import RecoverPassword from './RecoverPassword';

const LoginComponent = () => {
  return (
    <LoginStyled>
      <LoginMain />
    </LoginStyled>
  );
};

const PasswordRecovery = () => {
  return (
    <LoginStyled>
      <RecoverPassword />
    </LoginStyled>
  );
};

export default LoginComponent;
export { PasswordRecovery };
