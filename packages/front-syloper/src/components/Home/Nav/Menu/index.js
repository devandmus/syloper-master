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

  return (
    <MenuContainer className="menu-container">
      <MenuItem>
        <i>
          <GoDashboard {...iconProps} />
        </i>
        <p>Dashboard</p>
      </MenuItem>

      <Link to="/projects">
        <MenuItem>
          <i>
            <AiOutlineFolderOpen {...iconProps} />
          </i>
          <p>Projects</p>
        </MenuItem>
      </Link>

      <Link to="/tasks">
        <MenuItem>
          <i>
            <BiTask {...iconProps} />
          </i>
          <p>My Tasks</p>
        </MenuItem>
      </Link>

      <MenuItem>
        <i>
          <BsFiles {...iconProps} />
        </i>
        <p>Portfolios</p>
      </MenuItem>
      <MenuItem>
        <i>
          <IoPeopleOutline {...iconProps} />
        </i>
        <p>Responsibles</p>
      </MenuItem>
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
