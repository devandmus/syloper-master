import styled from 'styled-components';

const DashboardMain = styled.article`
  width: 100%;
  height: calc(100% - 100px);
  overflow-x: hidden;
`;

const DashboardContainer = styled.article`
  width: 100%;
  display: flex;
  gap: 20px;

  @media screen and (max-width: 1350px) {
    flex-direction: column;
  }
`;

export { DashboardMain, DashboardContainer };
