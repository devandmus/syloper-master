import React from 'react';
import { HeaderContainer, HeaderMenu, Title } from './styles';
import { FiUser, IoSettingsOutline } from 'react-icons/all'
import { useTheme } from 'styled-components';

const Header = ({ title }) => {
    const theme = useTheme()
    const iconProps = {
        size: "1.8em",
        color: theme.color.darkGreen
    }

    return ( 
        <HeaderContainer>
            <Title>{title}</Title>
            <HeaderMenu>
                <FiUser {...iconProps} />
                <IoSettingsOutline {...iconProps}/>
            </HeaderMenu>
        </HeaderContainer>
     );
}
 
export default Header;