import React from "react";
import { SyloperLogo } from '../../../images';
import { NavStyled, MenuIcon, Typography, MenuStyled, MenuItemStyled, userStyled } from './styles/NavStyled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserCircle } from '@fortawesome/free-solid-svg-icons'

const pages = [' Home', 'Projects', 'Tasks', 'Porfolios', 'Responsibles']
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']


const Nav = () => {
    return (
        <NavStyled>
            <MenuIcon>

                <SyloperLogo/>
            </MenuIcon>

            <MenuStyled>
              {pages.map((page) => (
                <MenuItemStyled>
                  <Typography> {page}</Typography>
                </MenuItemStyled>
              ))}
            </MenuStyled>

            <userStyled>
                <FontAwesomeIcon icon={faUserCircle} size="2x" color="green"/>
            </userStyled>

        </NavStyled>

    )
}

export default Nav