import React from 'react';
import Home from '../Home';
import TableBody from '../Portfolios/Table/styles';
import { CustomersMain } from './styles';

const Customers = () => (
  <Home title="Customers">
    <CustomersMain>
      <TableBody>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Customer</td>
            <td>admin@mail.com</td>
            <td>223344556677</td>
          </tr>
          <tr>
            <td>Customer</td>
            <td>admin@mail.com</td>
            <td>223344556677</td>
          </tr>
          <tr>
            <td>Customer</td>
            <td>admin@mail.com</td>
            <td>223344556677</td>
          </tr>
          <tr>
            <td>Customer</td>
            <td>admin@mail.com</td>
            <td>223344556677</td>
          </tr>
        </tbody>
      </TableBody>
    </CustomersMain>
  </Home>
);

export default Customers;
