import React, { useEffect, useState } from 'react';
import TableBody from './styles';
import ServiceBFF from '../../../../services/BFF';
import { numberFormatter, currencyFormatter } from '../../../../utils/number';
const Table = () => {
  const [tableData, setTableDta] = useState();

  useEffect(() => {
    ServiceBFF.getPortfolio().then((data) => setTableDta(data));
  }, []);

  return (
    <TableBody>
      <tr>
        <th>Project</th>
        <th>Client</th>
        <th>Price per Hour</th>
        <th>Estimated Hours</th>
        <th>Worked Hours</th>
        <th>Estimated Incomes</th>
        <th>Real Incomes</th>
      </tr>
      {tableData?.map((row) => (
        <tr>
          <td>{row.project_title}</td>
          <td>{row.client}</td>
          <td>{row.price_per_hour}</td>
          <td>{numberFormatter(row.estimated_hours)}</td>
          <td>{numberFormatter(row.worked_hours)}</td>
          <td>{currencyFormatter(row.estimated_incomes)}</td>
          <td>{currencyFormatter(row.real_incomes)}</td>
        </tr>
      ))}
    </TableBody>
  );
};

export default Table;
