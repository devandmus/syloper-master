import styled from 'styled-components';
import Button from '../../../UI/Button/styles/ButtonStyled';

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;

    ${Button}{
        width: 80%;
    }

    @media only screen and (max-width: 768px){
        ${Button}{
            width: 100%;
        }
    }
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

export {
  Form,
  Text,
  Forgot,
  Sign,
};
