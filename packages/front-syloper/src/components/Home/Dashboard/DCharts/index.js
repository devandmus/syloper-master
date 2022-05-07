import * as React from 'react';
import BalanceChart from './BalanceChart';
import FirstCharts from './FirstCharts';
import { DChartsContainer } from './styles';

const Dcharts = () => {
  return (
    <DChartsContainer>
      <FirstCharts />
      <BalanceChart />
    </DChartsContainer>
  );
};

export default Dcharts;
