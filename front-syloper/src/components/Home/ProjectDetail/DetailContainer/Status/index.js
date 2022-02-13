import React from 'react';
import { SectionTitle } from '../styles';
import { MdAutoGraph } from 'react-icons/md'
import { ProgressBar, StatusContainer, StatusMain, StatusTxt } from './styles';

const Status = () => {
    return ( 
        <StatusContainer>
            <SectionTitle>
                <i><MdAutoGraph /></i>
                <h5>Status</h5>
            </SectionTitle>
            <StatusMain>
                <StatusTxt>In Progress</StatusTxt>
                <ProgressBar>
                    <div className='bar-container'><span></span></div>
                    <p className='progress-value'>30%</p>
                </ProgressBar>
            </StatusMain>
        </StatusContainer>
     );
}
 
export default Status;
