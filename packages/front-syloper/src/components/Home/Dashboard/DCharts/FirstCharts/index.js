import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useTheme } from 'styled-components';
import {
  FChartsContainer,
  FChartsData,
  FChartsInfo,
  FirstContainer,
} from './styles';

const FirstCharts = () => {
  const theme = useTheme();

  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    datasets: [
      {
        label: '',
        data: [12, 19, 3],
        backgroundColor: [
          `${theme.color.chartOrange}`,
          `${theme.color.chartYellow}`,
          `${theme.color.chartGreen}`,
        ],
      },
    ],
  };

  return (
    <FirstContainer>
      <FChartsContainer>
        <h3>Projects</h3>
        <FChartsInfo>
          <section className="chart">
            <Doughnut data={data} />
          </section>
          <FChartsData>
            <section className="data-container">
              <div>
                <span>Ready to Start</span>
                <span className="status-a">10</span>
              </div>
              <div>
                <span>In Progress</span>
                <span className="status-b">10</span>
              </div>
              <div>
                <span>Completed</span>
                <span className="status-c">10</span>
              </div>
            </section>
          </FChartsData>
        </FChartsInfo>
      </FChartsContainer>
      <FChartsContainer>
        <h3>Total Tasks</h3>
        <FChartsInfo>
          <section className="chart">
            <Doughnut data={data} />
          </section>
          <FChartsData>
            <section className="data-container">
              <div>
                <span>Ready to Start</span>
                <span className="status-a">10</span>
              </div>
              <div>
                <span>In Progress</span>
                <span className="status-b">10</span>
              </div>
              <div>
                <span>Completed</span>
                <span className="status-c">10</span>
              </div>
            </section>
          </FChartsData>
        </FChartsInfo>
      </FChartsContainer>
    </FirstContainer>
  );
};

export default FirstCharts;
