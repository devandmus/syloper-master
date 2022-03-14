import styled from 'styled-components';
import Button from '../../../UI/Button/styles/ButtonStyled';

const RecoverFormStyled = styled.form`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;

  p {
    width: 100%;
    text-align: center;
    font-size: 1.25rem;
    line-height: 1.4;
  }
  

  ${Button} {
    width: 80%;
  }

  @media only screen and (max-width: 768px) {
    ${Button} {
      width: 100%;
    }

    p {
      font-size: 1.18rem;
    }
  }
`;

const Text = styled.p`
    width: auto;
    text-align: center;
    font-weight: 500;
    font-size: 1.05rem;
`;

const Back = styled(Text)`
    color: ${({ theme }) => theme.color.primaryGreen };
    margin: 15px 0 50px;
    cursor: pointer;
`;

export {
  RecoverFormStyled,
  Back
};
