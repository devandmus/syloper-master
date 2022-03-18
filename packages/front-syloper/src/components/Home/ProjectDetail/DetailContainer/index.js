import React from 'react';
import Description from './Description';
import DueDate from './DueDate';
import Participants from './Participants';
import Status from './Status';
import { DetailTitle, DetailMain, FirstInfoContainer } from './styles';
import Tasks from './Tasks';

const DetailContainer = (props) => {
  const { customerId, projectDescription, cost, projectDate, projectId } =
    props;

  return (
    <>
      <DetailTitle>
        <h3>{projectDescription}</h3>
        <h4>{customerId}</h4>
      </DetailTitle>
      <DetailMain>
        <FirstInfoContainer>
          <Participants />
          <DueDate due_date={projectDate} />
          <Status />
        </FirstInfoContainer>
        <Description description={projectDescription} />
        <Tasks projectId={projectId} />
      </DetailMain>
    </>
  );
};

export default DetailContainer;
