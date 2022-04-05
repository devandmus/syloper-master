import styled from 'styled-components';

const ChartContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
`;

const ChartModule = styled.div`
  background-color: #fff;
  padding: 25px;
  box-sizing: border-box;
  width: 32%;
  border-radius: 20px;
  margin-bottom: 20px;

  @media only screen and (max-width: 1250px) {
    width: 48%;
  }

  @media only screen and (max-width: 1000px) {
    width: 700px;
    margin: 0 auto 20px;
  }

  @media only screen and (max-width: 768px) {
    width: 95%;
  }

  h2 {
    width: 100%;
    font-size: 1.35rem;
    font-weight: 500;
    margin-bottom: 20px;

    @media only screen and (max-width: 1000px) {
        font-size: 1.27rem;
    }
  }
`;

export { ChartContainer, ChartModule };
