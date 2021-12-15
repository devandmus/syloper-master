import React from 'react';
import styled from 'styled-components';
import Button from '../../ui/Button';
import Input from '../../ui/Input';


const RecoverFormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    p{
        width: 100%;
        text-align: center;
        font-size: 1.25rem;
        line-height: 1.4;
    }
    .btn {
        width: 80%;
    }

    @media only screen and (max-width: 768px){
        .btn{
            width: 100%;
        }

        p{
            font-size: 1.18rem;
        }
    }
`;

const RecoverForm = () => {
    return ( 
        <RecoverFormContainer>
            <p>Just enter the email address you registered with and we’ll send you a link to reset your password</p>
            <Input 
                placeholder="Email Address" 
                margin="35px 0 35px 0"
            />
            <Button
                className="btn" 
                text="Send"
            />
        </RecoverFormContainer>
     );
}
 
export default RecoverForm;
