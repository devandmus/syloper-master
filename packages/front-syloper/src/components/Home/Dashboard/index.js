import React, { useEffect } from 'react';
import { DashboardStyled } from './styles/DashboardStyled';
import ServicesDashboard from '../../../services/ServicesDashboard';

const Dashboard = () => {
  useEffect(() => {
    ServicesDashboard.getDashboardData().then(data => console.log(data));
  },[])
  return (
    <DashboardStyled>
    </DashboardStyled>
  );
};

export default Dashboard;
