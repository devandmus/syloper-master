import React from 'react';
import { FiUser } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';
import { useTheme } from 'styled-components';
import { HeaderContainer, HeaderMenu, Title } from './styles';
import BackButtonComp from '../../UI/BackButton';

const Header = ({ title }) => {
  const theme = useTheme();
  const iconProps = {
    size: '1.8em',
    color: theme.color.darkGreen,
  };

  return (
    <HeaderContainer>
      <BackButtonComp />
      <Title>{title}</Title>
      <HeaderMenu>
        <FiUser {...iconProps} />
        <IoSettingsOutline {...iconProps} />
      </HeaderMenu>
    </HeaderContainer>
  );
};

export default Header;
