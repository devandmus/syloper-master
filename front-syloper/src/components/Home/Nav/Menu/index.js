import React from 'react';
import { MenuContainer, MenuItem } from './styles';
import { AiOutlineFolderOpen, GoDashboard, BiTask, BsFiles, IoPeopleOutline, RiLogoutCircleLine } from 'react-icons/all'
import { useTheme } from 'styled-components';



const Menu = () => {
    const theme = useTheme();
    const iconProps = {
        size: "1.6em",
        color: "#000"
    }

    return ( 
        <MenuContainer className='menu-container'>
            <MenuItem>
                <i><GoDashboard {...iconProps}/></i>
                <p>Dashboard</p>
            </MenuItem>
            <MenuItem>
                <i><AiOutlineFolderOpen {...iconProps}/></i>
                <p>Projects</p>
            </MenuItem>
            <MenuItem>
                <i><BiTask {...iconProps}/></i>
                <p>Tasks</p>
            </MenuItem>
            <MenuItem>
                <i><BsFiles {...iconProps}/></i>
                <p>Portfolios</p>
            </MenuItem>
            <MenuItem>
                <i><IoPeopleOutline {...iconProps}/></i>
                <p>Responsibles</p>
            </MenuItem>
            <MenuItem>
                <i><RiLogoutCircleLine size="1.6em" color={theme.color.primaryGreen}/></i>
                <p>Logout</p>
            </MenuItem>
        </MenuContainer>
     );
}
 
export default Menu;