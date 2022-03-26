import React from 'react';
import { navigate } from 'gatsby';
import { BiArrowBack } from 'react-icons/bi';
import BackButton from './styles/BackButtonStyled';

const BackButtonComp = () => {
  return (
    <BackButton onClick={() => navigate(-1)}>
      <BiArrowBack />
    </BackButton>
  );
};

export default BackButtonComp;
