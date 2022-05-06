import React from 'react';
import { AssignImg, AvatarStyled, DisplayName } from './styles';

const Avatar = ({ responsible }) => {
  return (
    <AvatarStyled>
      <DisplayName>{responsible && responsible.name}</DisplayName>
      <AssignImg src={responsible && responsible.avatar} />
    </AvatarStyled>
  );
};

export default Avatar;
