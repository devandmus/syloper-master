import React from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { TMenuIcon } from './styles';

const BurgerIcon = ({ handleClickMenu }) => {
  return (
    <TMenuIcon onClick={handleClickMenu}>
      <HiMenuAlt3 size="20" />
    </TMenuIcon>
  );
};

export default BurgerIcon;
