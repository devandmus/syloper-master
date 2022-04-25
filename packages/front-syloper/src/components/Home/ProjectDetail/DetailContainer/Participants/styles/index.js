import styled from 'styled-components';

const ParticipantsList = styled.div`
  width: 100%;

  @media only screen and (max-width: 768px) {
    width: auto;
    display: flex;
    margin: 0 auto;
    justify-content: center;
  }
`;

const ParticipantsImg = styled.span`
  width: 45px;
  height: 45px;
  display: inline-block;
  transform: ${({ translatex }) => `translateX(${translatex}px)`};
  ${({ src }) => src && `background-image: url(${src})`};
  background-size: cover;
  border: 1px solid #fff;
  border-radius: 50%;

  @media only screen and (max-width: 768px) {
    transform: translateX(0px);
  }

  &:last-child {
    background-color: ${({ theme }) => theme.color.lightGreen};
    position: relative;

    i {
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      top: 50%;
      width: 15px;
      transform: translateY(-50%);
    }
  }
`;

export {
  ParticipantsList,
  ParticipantsImg
}
