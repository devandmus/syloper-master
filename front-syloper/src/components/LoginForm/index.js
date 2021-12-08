import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';
import Input from '../ui/Input';


const Form = styled.form`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
`;

const Text = styled.p`
    width: auto;
    text-align: center;
    font-weight: 500;
    font-size: 1.05rem;
`;

const Forgot = styled(Text)`
    color: ${({ theme }) => theme.color.primaryGreen };
    margin: 15px 0 50px;
    cursor: pointer;
`;

const Sign = styled(Text)`
    margin: 45px 0;
    a{
        cursor: pointer;
        color: ${({ theme }) => theme.color.primaryGreen };
    }
`;

const LoginForm = () => {
    return ( 
        <Form>
            <Input placeholder="Email Address" margin="0 0 20px 0"/>
            <Input placeholder="Password" margin="0 0 20px 0"/>
            <Forgot>
                <Link>Forgot Password?</Link>
            </Forgot>
            <Button btnWidth="80%" text="Login"/>
            <Sign>
                Don't have an account? <Link>Sign In</Link>
            </Sign>
        </Form>
     );
}
 
export default LoginForm;