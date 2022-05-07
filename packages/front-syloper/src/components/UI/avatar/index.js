import React from 'react';
import { AssignImg, AvatarStyled } from './styles';

const Avatar = ({ responsible, name, i, translatex }) => {
  return (
    <AvatarStyled translatex={translatex} key={i}>
      <AssignImg src={responsible && responsible.avatar} />
    </AvatarStyled>
  );
};

export default Avatar;
