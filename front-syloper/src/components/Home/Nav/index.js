import React from 'react';
import Logo from '../../UI/Logo';
import Menu from './Menu';
import { NavContainer } from './styles'

const Nav = () => {
  return (
    <NavContainer>
      <Logo width="170px" height="50px" />
      <Menu />
    </NavContainer>
  );
};

export default Nav;
