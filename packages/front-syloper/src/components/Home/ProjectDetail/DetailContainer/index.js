import React, { useState } from 'react';
import { EditText } from 'react-edit-text';
import { useTheme } from 'styled-components';
import Description from './Description';
import DueDate from './DueDate';
import Participants from './Participants';
import Status from './Status';
import { DetailTitle, DetailMain, FirstInfoContainer } from './styles';
import Tasks from './Tasks';
import 'react-edit-text/dist/index.css';
import Modal from '../../../UI/ModalForm';

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

  const handleOnSave = ({ value, previousValue }) => {
    if (value !== previousValue) {
      updateProject({ project_title: value });
    }
  };

  const [title, setTitle] = useState(projectTitle);

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
            marginBottom: '10px',
            fontWeight: 600,
            fontSize: '2.3rem',
            lineHeight: 1.35,
            fontFamily: theme.font.family,
          }}
        />
        <h4>{customerId}</h4>
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
        <Modal
          title="New Task"
          description="Add task details"
          section="Task"
          projectId={projectId}
        />

        <Tasks projectId={projectId} />
      </DetailMain>
    </>
  );
};

export default DetailContainer;
