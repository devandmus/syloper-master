import * as React from 'react';
import { Employee, EmployeeContainer, EmployeeTitle } from './styles';
import ServiceBFF from '../../../../services/BFF';

const EmployeeRanking = () => {
  const [Employees, setEmployeesRanking] = React.useState([]);

  React.useEffect(() => {
    ServiceBFF.getEmployeesRanking().then((data) => {
      setEmployeesRanking(data);
    });
  }, []);

  console.log(EmployeeRanking);

  return (
    <EmployeeContainer>
      <EmployeeTitle>
        <h3>Employee Ranking</h3>
        <span>{Employees.length}</span>
      </EmployeeTitle>
      {Employees.map((employee) => {
        return (
          <Employee>
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
