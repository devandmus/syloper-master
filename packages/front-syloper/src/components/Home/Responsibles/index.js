import React from 'react';
import Home from '../Home';
import TableBody from '../Portfolios/Table/styles';
import { ResponsiblesMain } from './style';

const Responsibles = () => (
  <Home title="Responsibles ">
    <ResponsiblesMain>
      <TableBody>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Hour Cost</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Administrator</td>
            <td>admin@mail.com</td>
            <td>$40</td>
            <td>Fullstack Developer</td>
          </tr>
          <tr>
            <td>Administrator</td>
            <td>admin@mail.com</td>
            <td>$40</td>
            <td>Fullstack Developer</td>
          </tr>
          <tr>
            <td>Administrator</td>
            <td>admin@mail.com</td>
            <td>$40</td>
            <td>Fullstack Developer</td>
          </tr>
          <tr>
            <td>Administrator</td>
            <td>admin@mail.com</td>
            <td>$40</td>
            <td>Fullstack Developer</td>
          </tr>
        </tbody>
      </TableBody>
    </ResponsiblesMain>
  </Home>
);

export default Responsibles;
