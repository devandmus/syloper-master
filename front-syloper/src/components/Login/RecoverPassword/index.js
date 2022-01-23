import React from 'react';
import { SyloperLogo } from '../../../images';
import RecoverForm from '../RecoverForm';
import RecoverPasswordStyled from './styles/RecoverPasswordStyled';

const RecoverPassword = () => {
  return (
    <RecoverPasswordStyled>
      <div>
        <SyloperLogo />
      </div>
      <h2>Recover Password</h2>
      <RecoverForm />
    </RecoverPasswordStyled>
  );
};

export default RecoverPassword;
