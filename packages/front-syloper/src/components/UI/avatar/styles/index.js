import styled from 'styled-components';

const AssignImg = styled.span`
  width: 45px;
  height: 45px;
  alt: ${(props) => props.alt}};
  ${({ src }) =>
    src ? `background-image: url(${src});` : 'background-color: gray;'}
  background-size: cover;
  border: 1px solid #fff;
  border-radius: 50%;
  display: block;
`;

const AvatarStyled = styled.div`
  width: 45px;
  height: 45px;
  display: inline-block;
  transform: ${(props) => `translateX(${props.translatex}px)`};
  background-color: gray;
  border: 1px solid #fff;
  border-radius: 50%;
`;

const DisplayName = styled.span`
  width: 100%;
  font-weight: 300;
  font-size: 1.08rem;
  line-height: 1.35;
`;

const AvatarGroup = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export { AssignImg, AvatarStyled, DisplayName, AvatarGroup };
