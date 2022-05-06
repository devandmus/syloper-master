import styled from 'styled-components';

const AssignImg = styled.span`
  width: 45px;
  height: 45px;
  ${({ src }) =>
    src ? `background-image: url(${src});` : 'background-color: gray;'}
  background-size: cover;
  border: 1px solid #fff;
  border-radius: 50%;
  display: block;
`;

const AvatarStyled = styled.div`
  justify-content: center;
  display: block;
`;

const DisplayName = styled.span`
  width: 100%;
  font-weight: 300;
  font-size: 1.08rem;
  line-height: 1.35;
`;

export { AssignImg, AvatarStyled, DisplayName };
