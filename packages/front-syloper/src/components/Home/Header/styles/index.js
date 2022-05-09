import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  gap: 20px;

  @media only screen and (max-width: 650px) {
    margin-bottom: 35px;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
`;

const HeaderMenu = styled.div`
  display: flex;
  width: 85px;
  justify-content: space-between;
  align-items: center;
`;

export { HeaderContainer, Title, HeaderMenu };
