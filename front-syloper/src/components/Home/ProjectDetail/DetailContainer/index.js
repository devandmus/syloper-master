import React from 'react';
import Description from './Description';
import DueDate from './DueDate';
import Participants from './Participants';
import Status from './Status';
import { DetailTitle, DetailMain } from './styles';
import Tasks from './Tasks';

const DetailContainer = () => {
  return (
    <>
      <DetailTitle>
        <h3>Web App Development</h3>
        <h4>Client Name</h4>
      </DetailTitle>
      <DetailMain>
        <Participants />
        <DueDate />
        <Status />
        <Description />
        <Tasks />
      </DetailMain>
    </>
  );
};

export default DetailContainer;
