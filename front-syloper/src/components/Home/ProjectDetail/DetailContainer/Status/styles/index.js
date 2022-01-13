import styled from "styled-components";

const StatusContainer = styled.div`
    width: 45%;
`;

const StatusMain = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StatusTxt = styled.p`
    font-size: 1.1rem;
`;

const ProgressBar = styled.div `
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .bar-container {
        width: 87%;
        height: 5px;
        border-radius: 10px;
        background-color: ${({theme}) => theme.color.gray200};

        span {
            display: block;
            width: 30%;
            height: 5px;
            border-radius: 10px;
            background-color: ${({theme}) => theme.color.lightGreen};
        }
    }

    .progress-value {
        font-size: 1rem;
        font-weight: 600;
    }
`;


export {
    StatusContainer,
    StatusMain,
    StatusTxt,
    ProgressBar
}