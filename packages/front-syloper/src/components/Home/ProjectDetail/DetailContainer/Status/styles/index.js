import styled from 'styled-components';

const StatusContainer = styled.div`
  width: 45%;
`;

const StatusMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    margin: 0 auto;
  }
`;

const StatusTxt = styled.p`
  font-size: 1.1rem;
`;

const ProgressBar = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 1150px) and (min-width: 768px) {
    width: 85%;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin-top: 6px;
  }

  .bar-container {
    width: 87%;
    height: 5px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.gray200};

    @media only screen and (max-width: 1150px) {
      width: 90%;
    }

    @media only screen and (max-width: 768px) {
      margin-bottom: 6px;
    }

    span {
      display: block;
      width: ${({ progress }) => progress}%;
      height: 5px;
      border-radius: 10px;
      background-color: ${({ theme }) => theme.color.lightGreen};
    }
  }

  .progress-value {
    font-size: 1rem;
    font-weight: 600;
  }
`;

export {
  StatusContainer,
  StatusMain,
  StatusTxt,
  ProgressBar
}
