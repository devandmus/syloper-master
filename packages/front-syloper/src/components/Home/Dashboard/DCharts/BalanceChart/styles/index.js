import styled from 'styled-components';

const BalanceContainer = styled.section`
  width: 100%;
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  box-sizing: border-box;

  h3 {
    width: 100%;
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .chart {
    width: 80%;

    @media screen and (max-width: 760px) {
      width: 100%;
    }
  }
`;

export { BalanceContainer };
