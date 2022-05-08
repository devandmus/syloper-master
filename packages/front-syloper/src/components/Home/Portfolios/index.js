import React from 'react';
import Home from '../Home';
import Charts from './Charts';
import { PortfoliosMain } from './styles';
import Table from './Table';

const Portfolios = () => {
  return (
    <Home title="Portfolios">
      <PortfoliosMain>
        <Charts />
        <Table />
      </PortfoliosMain>
    </Home>
  );
};

export default Portfolios;
