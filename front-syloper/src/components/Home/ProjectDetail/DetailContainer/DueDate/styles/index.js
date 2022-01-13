import styled from 'styled-components';

const DateInfo = styled.div `
    width: 200px;
    padding: 10px;
    box-sizing: border-box;
    background-color: ${({theme}) => theme.color.gray200};
    text-align: center;
    font-size: 1rem;
    border-radius: 5px;
    margin-bottom: 25px;
`;

export {
    DateInfo
}