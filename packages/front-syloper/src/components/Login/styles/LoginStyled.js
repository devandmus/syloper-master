import styled from 'styled-components';

const LoginStyled = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;

  h2 {
    width: 100%;
    font-size: 2.4rem;
    text-align: center;
    font-weight: 600;
    margin: 70px 0 40px;
  }

  @media only screen and (max-width: 768px) {
    max-width: 400%;
    h2 {
      font-size: 2rem;
    }
  }
`;

export default LoginStyled;
