import styled, { css } from 'styled-components';

const BackButton = styled.button`
  ${({ theme }) => css`
    border-radius: 25px;
    background-color: #fff;
    text-align: center;
    color: ${theme.color.primaryGreen};
    width: 3rem;
    border: 2px solid ${theme.color.primaryGreen};
    padding: 5px;
    font-size: 1.24rem;
    font-weight: 600;
    font-family: ${theme.font.family};
    cursor: pointer;
    &:hover {
      border: 2px solid ${theme.color.primaryGreen};
      background-color: #fff;
      color: ${theme.color.primaryGreen};
      transition: ${theme.transition};
    }
    @media only screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  `}
`;

export default BackButton;
