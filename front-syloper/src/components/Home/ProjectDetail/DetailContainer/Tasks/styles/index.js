import styled from 'styled-components';

const TaskContainer = styled.div`
    width: 100%;
    height: 460px;
    display: flex;
    justify-content: space-between;
    margin-top: 35px;

    @media only screen and (max-width: 768px){
        overflow-x: scroll;
        white-space: nowrap;
        display: block;
    }
`;

const TaskColumn = styled.div`
    width: 31%;
    height: 100%;
    overflow-y: scroll;

     > h5{
        width: 100%;
        font-size: 1.15rem;
        font-weight: 500;
        color: ${({theme}) => theme.color.gray600};
    }

    @media only screen and (max-width: 768px) {
        width: 310px;
        height: 100%;
        overflow-y: scroll;
        margin-right: 25px;
        white-space: normal;
        display: inline-block;
    }


`;

export {
    TaskContainer,
    TaskColumn
}