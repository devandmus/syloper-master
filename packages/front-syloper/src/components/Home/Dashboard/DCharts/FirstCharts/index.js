import * as React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useTheme } from 'styled-components';
import {
  FChartsContainer,
  FChartsData,
  FChartsInfo,
  FirstContainer,
} from './styles';
import ServicesBff from '../../../../../services/BFF';

const FirstCharts = () => {
  const theme = useTheme();
  const [userDashboard, setUserDashboard] = React.useState([]);
  const backgroundColorChart = [
    `${theme.color.chartOrange}`,
    `${theme.color.chartYellow}`,
    `${theme.color.chartGreen}`,
  ];

  React.useEffect(() => {
    // ServicesBff.getProject().then((data) => setProject(data));
    ServicesBff.getUserDashboard().then((data) => {
      const array = [];
      Object.keys(data.globalStatus).map((key, i) => {
        if (key !== 'total_projects') {
          array.push(data.globalStatus[key]);
        }
      });
      setUserDashboard(array);
    });
  }, []);

  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    datasets: [
      {
        label: '',
        data: userDashboard,
        backgroundColor: backgroundColorChart,
      },
    ],
  };

  const Labels = () => {
    const name = ['Ready to Start', 'In Progress', 'Completed'];

    return (
      <>
        {name.map((status, i) => (
          <div>
            <span>{status}</span>
            <span className={`status-${i}`}>{userDashboard[i]}</span>
          </div>
        ))}
      </>
    );
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
              <Labels />
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
