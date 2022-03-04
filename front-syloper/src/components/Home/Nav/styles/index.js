import styled from 'styled-components';

const NavContainer = styled.div`
  width: 225px;
  padding: 35px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.color.border};
  box-sizing: border-box;

  @media only screen and (max-width: 1000px) {
    position: absolute;
    width: 100%;
    bottom: 0;
    border-right: 0;
    border-top: 1px solid ${({ theme }) => theme.color.border};
    padding: 10px 15px;
    z-index: 10;

    > svg {
      display: none;
    }
  }
`;

export { NavContainer };
