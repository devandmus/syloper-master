import React from 'react';
import Description from './Description';
import DueDate from './DueDate';
import Participants from './Participants';
import Status from './Status';
import { DetailTitle, DetailMain, FirstInfoContainer } from './styles';
import Tasks from './Tasks';

const projectData = {
  customer_id: '61ca2996422d3ada42b6f34a',
  customer_name: 'Pepsi', //new
  project_date: '2021-12-30T11:21:16.000Z',
  project_description: 'Esta es una descripcion de ejemplo',
  project_cost: 50750,
  project_responsable: 'Joel Sanchez',
  project_status_id: '61ca2081c22d3adae79cf34a',
  createdAt: '2021-12-30T16:39:01.485Z',
  updatedAt: '2021-12-30T16:39:01.485Z',
  id: '61cde0a5c9973bbc0ce7de9b',
  title: 'Este es un titulo de ejemplo', // new
  due_date: '2022-12-30T11:21:16.000Z', // new
};

const DetailContainer = () => {
  const {
    customerId,
    date,
    projectId,
    projectDescription,
    cost,
    responsable,
    status_id,
    createdAt,
    updatedAt,
    id,
    title,
    dueDate,
    customerName,
  } = projectData;
  return (
    <>
      <DetailTitle>
        <h3>{title}</h3>
        <h4>{customerName}</h4>
      </DetailTitle>
      <DetailMain>
        <FirstInfoContainer>
          <Participants />
          <DueDate due_date={dueDate} />
          <Status />
        </FirstInfoContainer>
        <Description description={projectDescription} />
        <Tasks project_id={projectId} />
      </DetailMain>
    </>
  );
};

export default DetailContainer;
