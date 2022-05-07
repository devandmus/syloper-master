import styled from 'styled-components';

const FirstContainer = styled.article`
  width: 100%;
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 760px) {
    flex-direction: column;
  }
`;

const FChartsContainer = styled.div`
  width: 45%;
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  box-shadow: ${(props) => props.theme.boxShadoxC};

  @media screen and (max-width: 760px) {
    box-sizing: border-box;
    width: 100%;
  }

  h3 {
    width: 100%;
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 20px;
  }
`;

const FChartsInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .chart {
    width: 150px;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

const FChartsData = styled.div`
  flex-basis: 55%;
  display: flex;
  align-items: center;
  align-content: center;

  .data-container {
    width: 100%;
  }

  div {
    width: 100%;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    font-size: 1.05rem;

    &:last-child {
      margin: 0;
    }

    span {
      font-weight: 500;
      @media screen and (max-width: 500px) {
        margin-right: 13px;
      }

      &.status-0 {
        color: ${(props) => props.theme.color.chartOrange};
      }

      &.status-1 {
        color: ${(props) => props.theme.color.chartYellow};
      }

      &.status-2 {
        color: ${(props) => props.theme.color.chartGreen};
      }
    }
  }
`;

export { FirstContainer, FChartsContainer, FChartsInfo, FChartsData };
