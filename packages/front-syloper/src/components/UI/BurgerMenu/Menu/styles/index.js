import styled from 'styled-components';

const Item = styled.p`
  cursor: pointer;
`;

const TMenu = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.color.lightGreen};
  border-radius: 0 15px 15px 0;
  top: 0;
  right: 0;
  height: 100%;
  width: 150px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ theme }) => theme.boxShadowLeft};
  display: none;
  opacity: 1;
  transition: all 0.2s linear;
  display: flex;
  transform: translateX(170px);

  &.active {
    opacity: 1;
    transform: translateX(0);
  }

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
      font-size: 0.9rem;
    }
  }
`;

export { TMenu, Item };
