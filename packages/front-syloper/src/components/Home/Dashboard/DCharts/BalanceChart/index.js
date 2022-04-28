import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from '@faker-js/faker';
import { BalanceContainer } from './styles';

const BalanceChart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
  );

  const labels = ['January', 'February', 'March', 'April'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Hours',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        borderColor: '#34AD66',
        backgroundColor: '#2a8750',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <BalanceContainer>
      <h3>Portfolio Balance</h3>
      <section className="chart">
        <Line options={options} data={data} />
      </section>
    </BalanceContainer>
  );
};

export default BalanceChart;
