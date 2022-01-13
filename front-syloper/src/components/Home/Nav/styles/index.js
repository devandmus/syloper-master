import styled from "styled-components";

const NavContainer = styled.div`
    width: 235px;
    padding: 35px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border-right: 1px solid ${({ theme }) => theme.color.border };
`;

export {
    NavContainer,
}
