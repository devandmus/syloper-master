import React, { useState } from 'react';
import { MdDateRange } from 'react-icons/md';
import { EditText } from 'react-edit-text';
import { useTheme } from 'styled-components';
import { SectionTitle } from '../styles';
import { DateInfo } from './styles';
import { dateFormatter } from '../../../../../utils/date';
import 'react-edit-text/dist/index.css';

const DueDate = ({ projectDueDate, updateProject }) => {
  const theme = useTheme();
  const [dueDate, setDueDate] = useState(projectDueDate);
  const handleOnSave = ({ value, previousValue }) => {
    if (value !== previousValue) {
      updateProject({ project_due_date: value });
    }
  };
  return (
    <div>
      <SectionTitle>
        <i>
          <MdDateRange />
        </i>
        <h5>Due Date</h5>
      </SectionTitle>
      <EditText
        onSave={handleOnSave}
        onChange={setDueDate}
        type="date"
        value={dueDate}
        formatDisplayText={dateFormatter}
        style={{
          width: '200px',
          padding: '10px',
          boxSizing: 'border-box',
          backgroundColor: theme.color.gray200,
          textAlign: 'center',
          fontSize: '1rem',
          borderRadius: '5px',
          marginBottom: '25px',
        }}
      />
    </div>
  );
};

export default DueDate;
