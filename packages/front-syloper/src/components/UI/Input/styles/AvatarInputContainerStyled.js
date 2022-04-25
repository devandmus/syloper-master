import styled from 'styled-components';

const AvatarInputContainerStyled = styled.label`
  width: 100%;
  border: none;
  box-sizing: border-box;
  padding: 14px 16px;
  background-color: #fff;
  cursor: pointer;
  font-size: 12px !important;
  font-weight: 300 !important;
  font-style: italic;
  div {
    display: flex;
    text-align: center;
    padding: 0;
    margin: 0;
    width: 100%;
    justify-content: center;
  }
  input {
    display: none;
  }
`;


export default AvatarInputContainerStyled;
