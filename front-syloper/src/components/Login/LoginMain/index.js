import React from 'react';
import LoginForm from '../LoginForm';
import SyloperLogo from '../../ui/SyloperLogo';
import styled from 'styled-components';

const LoginContainer = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-flow: column;
    align-items: center;
    transform: translateY(-40px);

    h2 {
        width: 100%;
        font-size: 2.4rem;
        text-align: center;
        font-weight: 600;
        margin: 70px 0 40px;
    }

    .logo-container {
        width: 270px;
    }

    @media only screen and (max-width: 768px){
        max-width: 85%;

        .logo-container {
            width: 240px;
        }

        h2{
            font-size: 2rem;
        }
    }
`;

const LoginMain = () => {
    return ( 
        <LoginContainer>
            <div className='logo-container'><SyloperLogo/></div>
            <h2>Login</h2>
            <LoginForm />
        </LoginContainer>
     );
}
 
export default LoginMain;
