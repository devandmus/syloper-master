import React from 'react';
import Home from '../Home';
import { ResponsiblesMain } from './style';
import People from './People';
import Role from './Role';

const Responsibles = () => (
  <Home title="Responsibles ">
    <ResponsiblesMain>
      <People />
      <Role />
    </ResponsiblesMain>
  </Home>
);

export default Responsibles;
