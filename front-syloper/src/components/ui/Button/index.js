import React from 'react';
import styled, { css } from 'styled-components';

const ButtonA = styled.button`
    ${({ theme }) => css`
        width: ${props => props.btnWidth || "100%"};
        border-radius: 25px;
        background-color: ${theme.color.primaryGreen};
        text-align: center;
        color: #fff;
        border: 2px solid ${theme.color.primaryGreen};
        padding: 12px 0;
        font-size: 1.24rem;
        font-weight: 600;
        font-family: ${theme.font.family};
        cursor: pointer;
        &:hover {
            border: 2px solid ${theme.color.primaryGreen};
            background-color: #fff;
            color: ${theme.color.primaryGreen};
            transition: ${theme.transition}
        }
    `}
`;


const Button = ({text, btnWidth}) => {
    return ( 
        <ButtonA btnWidth={btnWidth}>{text}</ButtonA>       
     );
}
 
export default Button;
