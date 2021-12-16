import React from 'react';
import styled, { css } from 'styled-components';

const ButtonA = styled.button`
    ${({ theme }) => css`
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
        @media only screen and (max-width: 768px){
            font-size: 1.2rem;
        }
    `}
`;


const Button = ({text, btnWidth, className}) => {
    return ( 
        <ButtonA
            className={className}
        >
            {text}
        </ButtonA>       
     );
}
 
export default Button;
