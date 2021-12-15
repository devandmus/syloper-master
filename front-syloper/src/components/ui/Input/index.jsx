import React from 'react';
import styled from 'styled-components';

const InputComp = styled.input`
    width: 100%;
    border: none;
    box-sizing: border-box;
    padding: 14px 16px;
    background-color: #fff;
    margin: 0 0 20px 0;
    font-size: 1.15rem;
    color: ${({ theme }) => theme.color.text };
    margin: ${props => props.margin};
    font-family: ${({ theme }) => theme.font.family};
    border-radius: 7px;
    outline-color: ${({ theme }) => theme.color.primaryGreen };
    @media only screen and (max-width: 768px){
        font-size: 1.1rem;
    }
    
`;

const Input = ({ type, placeholder, onChange, value, name, className, margin }) => {
    return ( 
        <InputComp
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            name={name}
            className={className}
            margin={margin}
        ></InputComp>
     );
}
 
export default Input;