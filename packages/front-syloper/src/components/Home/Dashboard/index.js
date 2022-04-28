import React from 'react';
import Home from '../Home';
import Dcharts from './DCharts';
import MyTasks from './MyTasks';
import { DashboardContainer, DashboardMain } from './styles';

const Dashboard = () => {
  return (
    <Home title="Dashboard">
      <DashboardMain>
        <DashboardContainer>
          <MyTasks />
          <Dcharts />
        </DashboardContainer>
      </DashboardMain>
    </Home>
  );
};

export default Dashboard;
