import React, { useState, useEffect } from 'react';
import { EditText } from 'react-edit-text';
import { useTheme } from 'styled-components';
import Description from './Description';
import DueDate from './DueDate';
import Participants from './Participants';
import Status from './Status';
import { DetailTitle, DetailMain, FirstInfoContainer } from './styles';
import 'react-edit-text/dist/index.css';
import ServicesCustomer from '../../../../services/ServicesCustomer';
import KanbanBoard from '../../KanbanBoard';

const DetailContainer = (props) => {
  const theme = useTheme();

  const {
    customerId,
    projectTitle,
    projectDescription,
    updateProject,
    projectDueDate,
    projectId,
  } = props;

  const [customerData, setCustomerData] = useState({});
  const [title, setTitle] = useState(projectTitle);

  useEffect(() => {
    ServicesCustomer.getCustomerById(customerId).then((data) => {
      setCustomerData(data);
    });
  }, []);

  const handleOnSave = ({ value, previousValue }) => {
    if (value !== previousValue) {
      updateProject({ project_title: value });
    }
  };

  return (
    <>
      <DetailTitle>
        <EditText
          type="text"
          name="projectTitle"
          value={title}
          onChange={setTitle}
          onSave={handleOnSave}
          style={{
            width: '100%',
            marginBottom: '10px',
            fontWeight: 600,
            fontSize: '1.5rem',
            lineHeight: 1.35,
            fontFamily: theme.font.family,
          }}
        />
        <h4>{customerData.customer_full_name}</h4>
      </DetailTitle>
      <DetailMain>
        <FirstInfoContainer>
          <Participants />
          <DueDate
            projectDueDate={projectDueDate}
            updateProject={updateProject}
          />
          <Status />
        </FirstInfoContainer>
        <Description
          projectDescription={projectDescription}
          updateProject={updateProject}
        />

        <KanbanBoard projectId={projectId} />
      </DetailMain>
    </>
  );
};

export default DetailContainer;
