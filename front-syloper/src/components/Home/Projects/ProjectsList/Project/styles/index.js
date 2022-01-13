import styled from "styled-components";

const ProjectContainer = styled.div `
    width: 100%;
    background-color: #fff;
    border-radius: 15px;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: ${({theme}) => theme.boxShadow };
    display: flex;
    align-content: space-between;
    flex-direction: column;
`;

const Title = styled.div `
    width: 100%;
    margin-bottom: 30px;
    h4{
        font-size: 1.12rem;
        margin-bottom: 7px;
        font-weight: 600;
    }

    p{
        font-size: 1.1rem;
        color: ${({theme}) => theme.color.gray500};
        font-weight: 500;
    }
`;

const DueDate = styled.div `
    width: 80%;
    padding: 10px;
    box-sizing: border-box;
    background-color: ${({theme}) => theme.color.gray100};
    text-align: center;
    font-size: 1rem;
    border-radius: 5px;
    margin-bottom: 25px;
`;

const Progress = styled.div `
    width: 100%;
    margin-bottom: 20px;

    .bar-container{
        width: 100%;
        height: 5px;
        border-radius: 10px;
        background-color: ${({theme}) => theme.color.gray200};
        margin-bottom: 8px;

        span {
            display: block;
            width: 30%;
            height: 5px;
            border-radius: 10px;
            background-color: ${({theme}) => theme.color.lightGreen};
        }
    }

    .info-container {
        width: 100%;
        display: flex;
        justify-content: space-between;

        p {
            font-size: 1.00rem;
            font-weight: 600;
        }
    }
`;

const TasksTxt = styled.p `
    width: 100%;
    color: orange;
    font-size: 1rem;
    margin-bottom: 20px;
`;

const Users = styled.div `
    width: 100%;
`;

const UserImg = styled.span `
    width: 45px;
    height: 45px;
    display: inline-block;
    transform: ${ props => `translateX(${props.translatex}px)`};
    background-color: gray;
    border: 1px solid #fff;
    border-radius: 50%;
`;



export {
    ProjectContainer,
    Title,
    DueDate,
    Progress,
    TasksTxt,
    Users,
    UserImg
}