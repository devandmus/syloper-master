import styled from 'styled-components';

const DetailTitle = styled.section`
  width: 100%;
  display: flex;
  margin-bottom: 40px;
  align-items: baseline;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    margin-bottom: 25px;
  }

  h3 {
    font-size: 1.8rem;
    margin-right: 12px;
    font-weight: 600;

    @media only screen and (max-width: 768px) {
      width: 100%;
      margin-bottom: 4px;
      font-size: 1.6rem;
    }
  }

  h4 {
    font-size: 1.7rem;
    color: ${({ theme }) => theme.color.gray500};
    font-weight: 500;

    @media only screen and (max-width: 768px) {
      width: 100%;
      font-size: 1.5rem;
    }
  }
`;

const DetailMain = styled.section`
  width: 100%;
  height: calc(100% - 160px);
  overflow-y: scroll;

  > div {
    &:nth-child(-n + 2) {
      margin-bottom: 40px;
    }
  }
`;

const FirstInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  > div {
    @media only screen and (max-width: 1150px) {
      &:nth-last-child(-n + 1) {
        flex-basis: 100%;
      }
    }

    @media only screen and (max-width: 768px) {
      flex-basis: 100%;
      margin-bottom: 40px;

      &:nth-last-child(-n + 1) {
        margin-bottom: 0;
      }
    }
  }
`;

const SectionTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  &.task-title {
    justify-content: space-between;

    h5 {
      display: inline-block;
    }

    button {
      width: 200px;
      font-size: 1.17rem;
    }
  }

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }

  i {
    margin-right: 5px;
  }

  h5 {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

export { DetailTitle, DetailMain, SectionTitle, FirstInfoContainer };
