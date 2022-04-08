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
import { Line, Bar } from 'react-chartjs-2';
import faker from '@faker-js/faker';
import { ChartContainer, ChartModule } from './styles';

const Charts = () => {
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
    <ChartContainer>
      <ChartModule>
        <h2>Portfolio Balance</h2>
        <Line options={options} data={data} />
      </ChartModule>
      <ChartModule>
        <h2>Worked Hours</h2>
        <Bar options={options} data={data} />
      </ChartModule>
      <ChartModule>
        <h2>Estimated Hours</h2>
        <Line options={options} data={data} />
      </ChartModule>
    </ChartContainer>
  );
};

export default Charts;
