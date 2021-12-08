import React from 'react';
import LoginForm from '../LoginForm';
import SyloperLogo from '../ui/SyloperLogo';
import styled from 'styled-components';

const LoginContainer = styled.div`
    width: 500px;
    display: flex;
    flex-flow: column;
    align-items: center;
    transform: translateY(-40px);
`;

const H2 = styled.h2`
    width: 100%;
    font-size: 2.4rem;
    text-align: center;
    font-weight: 600;
    margin: 70px 0 40px;
`;

const Login = () => {
    return ( 
        <LoginContainer>
            <SyloperLogo widthSize="270px"/>
            <H2>Login</H2>
            <LoginForm />
        </LoginContainer>
     );
}
 
export default Login;
