import styled from 'styled-components';

const TaskCard = styled.div`
  width: 100%;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: ${({ theme }) => theme.boxShadow};
  padding: 25px 20px;
  box-sizing: border-box;
  margin-top: 20px;
  position: relative;
  overflow: hidden;
`;

const TTitle = styled.h5`
  width: 100%;
  font-weight: 500;
  font-size: 1.4rem;
  margin-bottom: 15px;
`;
const InputStyle = styled.div`
  width: 100%;
  display: block;

  .input-div {
    font-size: 1.1rem;
    position: relative;

    p {
      width: 100%;
      font-weight: 500;

      &:last-child {
        font-weight: 300;
        margin-top: 2px;
      }
    }

    .estimated-cost {
      margin-top: 10px;
      margin-bottom: 20px;
    }
  }
`;

const TDescription = styled.p`
  width: 100%;
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.3;
  margin-bottom: 20px;
`;

const DataColumns = styled.section`
  display: flex;
  gap: 5%;
  flex-wrap: wrap;

  ${InputStyle} {
    width: 45%;
  }
`;

const TFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1600px) {
    align-items: flex-start;
    flex-direction: column;
  }

  .due-date {
    font-size: 1.1rem;

    p {
      color: grey;
      width: 100%;
      font-weight: 400;

      &:last-child {
        font-weight: 300;
        margin-top: 2px;
      }
    }
  }

  .input-div > p {
    font-weight: 500;
    font-size: 16.5px;
  }
`;

export { TaskCard, TTitle, TDescription, TFooter, InputStyle, DataColumns };
