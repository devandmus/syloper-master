import * as React from 'react';
import { Employee, EmployeeContainer, EmployeeTitle } from './styles';
import ServiceBFF from '../../../../services/BFF';
import Avatar from '../../../UI/avatar';

const EmployeeRanking = () => {
  const [Employees, setEmployeesRanking] = React.useState([]);

  React.useEffect(() => {
    ServiceBFF.getEmployeesRanking().then((data) => {
      setEmployeesRanking(data);
    });
  }, []);

  return (
    <EmployeeContainer>
      <EmployeeTitle>
        <h3>Employee Ranking</h3>
        <span>{Employees.length}</span>
      </EmployeeTitle>
      {Employees.map((employee) => {
        return (
          <Employee>
            <Avatar responsible={employee} />
            <h4>{employee.name}</h4>
            <p>Hours</p>
            <p>{employee.hours}</p>
          </Employee>
        );
      })}
    </EmployeeContainer>
  );
};

export default EmployeeRanking;
