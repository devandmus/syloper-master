import styled from 'styled-components';

const MenuContainer = styled.nav `
    width: 100%;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    height: 90vh;
    div:last-child{
        margin-top: auto;
        opacity: 1;
        margin-bottom: 0;
    }
`;

const MenuItem = styled.div `
    width: 100%;
    display: flex;
    margin-bottom: 40px;
    align-items: center;
    opacity: .4;
    transition: ${({theme}) => theme.transition };
    cursor: pointer;

    i{
        margin-right: 20px;
    }

    p{
        font-size: 1.2rem;
        font-weight: 500;
        color: #000;
    }

    &:hover {
        transform: scale(1.01);
        opacity: 1;
    }
`;

export {
    MenuContainer,
    MenuItem
}