import React from 'react';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import { RecoverFormStyled, Back } from './styles/RecoverFormStyled';
import { Link } from 'gatsby';

const RecoverForm = () => {
  return (
    <RecoverFormStyled>
      <p>
        Just enter the email address you registered with and we’ll send you a
        link to reset your password
      </p>
      <Input
        placeholder="Email Address"
        margin="35px 0 35px 0"
      />
      <Button>Send</Button>
      <Back>
        <Link to="/">Back</Link>
      </Back>
    </RecoverFormStyled>
  );
};

export default RecoverForm;
