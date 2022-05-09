import React from 'react';
import { AssignImg, AvatarStyled, DisplayName } from './styles';

const Avatar = ({ responsible }) => {
  return (
    <AvatarStyled>
      <AssignImg src={responsible && responsible.avatar} />
      <DisplayName>{responsible && responsible.name}</DisplayName>
    </AvatarStyled>
  );
};

export default Avatar;
