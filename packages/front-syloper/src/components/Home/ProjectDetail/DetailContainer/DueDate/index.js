import React from 'react';
import { MdDateRange } from 'react-icons/md';
import { SectionTitle } from '../styles';
import { DateInfo } from './styles';
import { dateFormatter } from '../../../../../utils/date';

const DueDate = ({ projectDueDate }) => (
  <div>
    <SectionTitle>
      <i>
        <MdDateRange />
      </i>
      <h5>Due Date</h5>
    </SectionTitle>
    <DateInfo>{dateFormatter(projectDueDate)}</DateInfo>
  </div>
);

export default DueDate;
