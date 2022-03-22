import React from 'react';
import Description from './Description';
import DueDate from './DueDate';
import Participants from './Participants';
import Status from './Status';
import { DetailTitle, DetailMain, FirstInfoContainer } from './styles';
import Tasks from './Tasks';
import 'react-edit-text/dist/index.css';

const DetailContainer = (props) => {
  const {
    customerId,
    projectTitle,
    projectDescription,
    cost,
    projectDueDate,
    projectId,
  } = props;

  return (
    <>
      <DetailTitle>
        <h3>{projectTitle}</h3>
        <h4>{customerId}</h4>
      </DetailTitle>
      <DetailMain>
        <FirstInfoContainer>
          <Participants />
          <DueDate projectDueDate={projectDueDate} />
          <Status />
        </FirstInfoContainer>
        <Description description={projectDescription} />
        <Tasks projectId={projectId} />
      </DetailMain>
    </>
  );
};

export default DetailContainer;
