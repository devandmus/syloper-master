import * as React from 'react';
import Home from '../Home';
import Dcharts from './DCharts';
import EmployeeRanking from './EmployeeRanking';
import { DashboardContainer, DashboardMain } from './styles';
import ServicesBff from '../../../services/BFF';

const Dashboard = () => {
  // const [project, setProject] = React.useState([]);
  const [userDashboard, setUserDashboard] = React.useState([]);
  const [employeesRanking, setEmployeesRanking] = React.useState([]);

  React.useEffect(() => {
    // ServicesBff.getProject().then((data) => setProject(data));
    ServicesBff.getUserDashboard().then((data) => setUserDashboard(data));
    ServicesBff.getEmployeesRanking().then((data) => setEmployeesRanking(data));
  }, []);

  return (
    <Home title="Dashboard">
      <DashboardMain>
        <DashboardContainer>
          <EmployeeRanking />
          <Dcharts />
        </DashboardContainer>
      </DashboardMain>
    </Home>
  );
};

export default Dashboard;
