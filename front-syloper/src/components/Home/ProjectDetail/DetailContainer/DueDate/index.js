import React from 'react';
import { MdDateRange } from 'react-icons/md';
import { SectionTitle } from '../styles';
import { DateInfo } from './styles';
import { dateFormatter } from '../../../../../utils/date';

const DueDate = ({ due_date }) => (
  <div>
    <SectionTitle>
      <i>
        <MdDateRange />
      </i>
      <h5>Due Date</h5>
    </SectionTitle>
    <DateInfo>{dateFormatter(due_date)}</DateInfo>
  </div>
);

export default DueDate;
