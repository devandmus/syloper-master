import React from 'react';
import { AssignImg, AvatarStyled, DisplayName } from './styles';

const Avatar = ({ responsible }) => {
  return (
    <AvatarStyled>
      <DisplayName>{responsible.name}</DisplayName>
      <AssignImg />
    </AvatarStyled>
  );
};

export default Avatar;
