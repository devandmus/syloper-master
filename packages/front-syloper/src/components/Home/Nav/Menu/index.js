import React from 'react';
import { AiOutlineFolderOpen } from 'react-icons/ai';
import { GoDashboard } from 'react-icons/go';
import { BiTask } from 'react-icons/bi';
import { BsFiles } from 'react-icons/bs';
import { IoPeopleOutline } from 'react-icons/io5';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { useTheme } from 'styled-components';
import { Link } from 'gatsby';
import { useViewport } from '../../../../contexts/viewportSize';
import { MenuContainer, MenuItem } from './styles';
import Auth from '../../../../services/ServicesAuth';

const Menu = () => {
  const theme = useTheme();
  const { width } = useViewport();
  const breakpoint = 651;
  const iconProps = {
    size: width < breakpoint ? '1.8em' : '1.6em',
    color: '#000',
  };

  const items = [
    {
      name: 'Dashboard',
      link: '/home',
      icon: <GoDashboard {...iconProps} />,
    },
    {
      name: 'Projects',
      link: '/projects',
      icon: <AiOutlineFolderOpen {...iconProps} />,
    },
    {
      name: 'Tasks',
      link: '/tasks',
      icon: <BiTask {...iconProps} />,
    },
    {
      name: 'Portfolio',
      link: '/portfolios',
      icon: <BsFiles {...iconProps} />,
    },
    {
      name: 'Responsibles',
      link: '/responsibles',
      icon: <IoPeopleOutline {...iconProps} />,
    },
    {
      name: 'Customers',
      link: '/customers',
      icon: <IoPeopleOutline {...iconProps} />,
    },
  ];

  return (
    <MenuContainer className="menu-container">
      {items.map((item) => (
        <Link to={item.link}>
          <MenuItem>
            <i>{item.icon}</i>
            <p>{item.name}</p>
          </MenuItem>
        </Link>
      ))}

      <MenuItem onClick={Auth.logout}>
        <i>
          <RiLogoutCircleLine size="1.6em" color={theme.color.primaryGreen} />
        </i>
        <p>Logout</p>
      </MenuItem>
    </MenuContainer>
  );
};

export default Menu;
