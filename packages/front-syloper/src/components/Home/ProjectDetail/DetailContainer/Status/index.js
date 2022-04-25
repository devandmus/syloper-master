import React from 'react';
import { MdAutoGraph } from 'react-icons/md';
import { SectionTitle } from '../styles';
import { ProgressBar, StatusContainer, StatusMain, StatusTxt } from './styles';

const Status = ({ status, progress }) => (
  <StatusContainer>
    <SectionTitle>
      <i>
        <MdAutoGraph />
      </i>
      <h5>Status</h5>
    </SectionTitle>
    <StatusMain>
      <StatusTxt>{status}</StatusTxt>
      <ProgressBar progress={progress}>
        <div className="bar-container">
          <span />
        </div>
        <p className="progress-value">{progress}%</p>
      </ProgressBar>
    </StatusMain>
  </StatusContainer>
);

export default Status;
