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

export default RecoverFormStyled;
