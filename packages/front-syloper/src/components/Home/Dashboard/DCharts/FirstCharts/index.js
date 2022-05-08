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
import ServicesTasks from '../../../../../services/ServicesTasks';

const FirstCharts = () => {
  const theme = useTheme();
  const [userDashboard, setUserDashboard] = React.useState([]);
  const [tasks, setTasks] = React.useState([]);
  ChartJS.register(ArcElement, Tooltip, Legend);

  const backgroundColorChart = [
    `${theme.color.chartOrange}`,
    `${theme.color.chartYellow}`,
    `${theme.color.chartGreen}`,
  ];

  React.useEffect(() => {
    // ServicesBff.getProject().then((data) => setProject(data));
    ServicesBff.getUserDashboard().then((data) => {
      const array = [];
      Object.keys(data.globalStatus).map((key) => {
        if (key !== 'total_projects') {
          array.push(data.globalStatus[key]);
        }
      });
      setUserDashboard(array);
    });

    ServicesTasks.getTasks().then((data) => {
      const totalTasks = data.reduce((acc, task) => ({
        ...acc,
        [setTaskStatusName(task.status.toString())]: (acc[task.status] || 0) + 1,
      }), {})

      setTasks(totalTasks);
    });
  }, []);

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

  const setTaskStatusName = (name) => {
    switch (name) {
      case '0':
        return 'ready';
      case '1':
        return 'inProgress';
      case '2':
        return 'completed';
      default:
        break;
    }
  };

  const tasksDataValues = Object.values(tasks);

  const dataProjects = {
    datasets: [
      {
        label: '',
        data: userDashboard,
        backgroundColor: backgroundColorChart,
      },
    ],
  };

  const dataTasks = {
    datasets: [
      {
        label: '',
        data: tasksDataValues,
        backgroundColor: backgroundColorChart,
      },
    ],
  };

  return (
    <FirstContainer>
      <FChartsContainer>
        <h3>Projects</h3>
        <FChartsInfo>
          <section className="chart">
            <Doughnut data={dataProjects} />
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
            <Doughnut data={dataTasks} />
          </section>
          <FChartsData>
            <section className="data-container">
              <div>
                <span>Ready to Start</span>
                <span className="status-a">{tasks?.ready}</span>
              </div>
              <div>
                <span>In Progress</span>
                <span className="status-b">{tasks?.inProgress}</span>
              </div>
              <div>
                <span>Completed</span>
                <span className="status-c">{tasks?.completed}</span>
              </div>
            </section>
          </FChartsData>
        </FChartsInfo>
      </FChartsContainer>
    </FirstContainer>
  );
};

export default FirstCharts;
