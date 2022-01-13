import styled from 'styled-components';
import { MenuContainer } from '../../Nav/Menu/styles'

const ProjectsContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;


    ${ MenuContainer } {
        div:nth-child(2){
            opacity: 1;
        }
    }
`

const ProjectsMain = styled.div `
    width: 100%;
    background-color: #f8f9fa;
    padding: 40px 35px 0px;

    main{
        width: 100%;
        max-width: 1500px;
        margin: 0 auto;
    }
`;
 
export {
    ProjectsMain,
    ProjectsContainer
}