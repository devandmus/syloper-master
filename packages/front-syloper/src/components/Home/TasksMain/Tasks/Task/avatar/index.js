import React from 'react'
import { AssignImg, AvatarStyled, DisplayName, AvatarImg } from './styles';
 

const Avatar = ({responsible}) => { 

    return (
        <AvatarStyled>
            <DisplayName>{responsible.name}</DisplayName>
            <AvatarImg>
                <AssignImg/>

            </AvatarImg>
        
        </AvatarStyled>
    )
 }

 export default Avatar