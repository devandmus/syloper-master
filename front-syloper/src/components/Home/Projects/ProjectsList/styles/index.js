import styled from "styled-components";


const ProjectsGrid = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: 32% 32% 32%;
    justify-content: space-between;
    row-gap: 2rem;
    overflow-y: scroll;
    height: calc(100% - 190px);
    padding-right: 15px;
    box-sizing: border-box;
    grid-auto-rows: minmax(320px, 330px);
`;

export {
    ProjectsGrid
}