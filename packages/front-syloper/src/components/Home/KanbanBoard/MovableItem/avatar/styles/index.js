import styled from 'styled-components';

const AssignImg = styled.span`
  width: 34px;
  height: 34px;
  ${({ src }) =>
    src ? `background-image: url(${src});` : 'background-color: gray;'}
  background-size: cover;
  border: 1px solid #fff;
  border-radius: 50%;
  display: block;
`;

const AvatarStyled = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
`;

const DisplayName = styled.span`
  font-weight: 300;
  font-size: 1.08rem;
  line-height: 1.35;
  text-align: left;
`;

export { AssignImg, AvatarStyled, DisplayName };
