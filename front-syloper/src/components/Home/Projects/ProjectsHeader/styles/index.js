import styled from "styled-components";
import Button from "../../../../UI/Button";

const ProjectsHeaderContainer = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;

    @media only screen and (max-width: 500px){
        margin-bottom: 15px;
    }

    ${Button} {
        width: 180px;
        font-size: 1.15rem;

        @media only screen and (max-width: 1270px){
            width: 145px;
            font-size: 1.12rem;
        }

        @media only screen and (max-width: 768px){
            width: 55px;
            height: 55px;
            position: absolute;
            bottom: 80px;
            right: 15px;
            z-index: 100;
            border-radius: 50%;
            box-shadow: ${({ theme }) => theme.boxShadowB };
        }
    }
`;

const Count = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;

    @media only screen and (max-width: 1270px){
        width: 540px;
    }

    @media only screen and (max-width: 768px){
        width: 100%;
    }

    @media only screen and (max-width: 500px){
        flex-wrap: wrap;
    }
`;

const CountItem = styled.div`
    @media only screen and (max-width: 500px){
        width: 120px;
        margin-bottom: 10px;
    }

    p{
        width: 100%;

        &:first-child{
            font-size: 1.6rem;
            font-weight: 600;
            margin-bottom: 3px;
        }

        &:last-child{
            font-size: 1.15rem;
            color: ${({ theme }) => theme.color.gray600 };

            @media only screen and (max-width: 650px){
                font-size: 1.04rem;
                letter-spacing: -.5px;
            }
        }
    }
`;

export {
    ProjectsHeaderContainer,
    Count,
    CountItem
}


