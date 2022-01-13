import styled from 'styled-components';

const TaskContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 35px;
`;

const TaskColumn = styled.div`
    width: 31%;

     > h5{
        width: 100%;
        font-size: 1.15rem;
        font-weight: 500;
        color: ${({theme}) => theme.color.gray600};
    }
`;

export {
    TaskContainer,
    TaskColumn
}