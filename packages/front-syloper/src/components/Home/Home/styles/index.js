import styled from 'styled-components';
import { MenuContainer } from '../../Nav/Menu/styles'

const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    ${ MenuContainer } {
        div:nth-child(2){
            opacity: 1;
        }
    }

    @media only screen and (max-width: 1000px){
        flex-direction: column;
    }
`

const HomeMain = styled.div `
    width: 100%;
    background-color: #f8f9fa;
    padding: 40px 35px 0px;
    box-sizing: border-box;

    main{
        width: 100%;
        height: 100%;
        max-width: 1500px;
        margin: 0 auto;
    }

    @media only screen and (max-width: 1000px){
        height: 100%;
    }

    @media only screen and (max-width: 650px){
        padding: 25px 20px;
    }
`;
 
export {
    HomeMain,
    HomeContainer
}