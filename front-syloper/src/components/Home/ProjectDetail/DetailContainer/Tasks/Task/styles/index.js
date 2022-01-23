import styled from 'styled-components';

const TaskCard = styled.div`
    width: 100%;
    border-radius: 15px;
    background-color: #fff;
    box-shadow: ${({theme}) => theme.boxShadow};
    padding: 25px 20px;
    box-sizing: border-box;
    margin-top: 20px;
    position: relative;
`;

const TTitle= styled.h5`
    width: 100%;
    font-weight: 500;
    font-size: 1.1rem;
    margin-bottom: 15px;
`;

const TDescription = styled.p`
    width: 100%;
    font-size: .9rem;
    font-weight: 300;
    line-height: 1.3;
    margin-bottom: 20px;
`;

const TFooter = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .due-date {
        font-size: .9rem;

        p {
            width: 100%:
            font-weight: 400;

            &:last-child {
                font-weight: 300;
                margin-top: 2px;
            }
        }
    }
`;


const AssignImg = styled.span`
    width: 45px;
    height: 45px;
    background-color: gray;
    border: 1px solid #fff;
    border-radius: 50%;
`;

const TMenuIcon = styled.i`
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
`;

const TMenu = styled.div`
    position: absolute;
    background-color: ${({theme}) => theme.color.lightGreen};
    display: flex;
    border-radius: 0 15px 15px 0;
    top: 0;
    right: 0;
    height: 100%;
    width: 150px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: ${({theme}) => theme.boxShadowLeft};

    i {
        position: absolute;
        top: 8px;
        right: 8px;
        cursor: pointer;
    }

    div {
        p {
            width: 100%;
            color: #fff;
            font-weight: 500;
            margin-bottom: 10px;
            font-size: .9rem;
        }
    }
`;



export {
    TaskCard,
    TTitle,
    TDescription,
    TFooter,
    AssignImg,
    TMenuIcon,
    TMenu
}