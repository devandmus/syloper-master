import styled from 'styled-components';

const ProjectsGrid = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 32% 32% 32%;
  justify-content: space-between;
  row-gap: 2rem;
  height: calc(100% - 190px);
  padding-right: 15px;
  box-sizing: border-box;
  grid-auto-rows: minmax(320px, 330px);

  @media only screen and (max-width: 1270px) {
    grid-template-columns: 48% 48%;
    height: calc(100% - 260px);
  }

  @media only screen and (max-width: 650px) {
    grid-template-columns: 100%;
    padding: 0;
    height: calc(100% - 214px);
  }
`;

export { ProjectsGrid };
