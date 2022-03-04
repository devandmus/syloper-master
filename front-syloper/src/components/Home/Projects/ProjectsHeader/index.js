import React, { useContext } from 'react';
import { FaPlus } from 'react-icons/fa';
import Button from '../../../UI/Button';
import { Count, CountItem, ProjectsHeaderContainer } from './styles';
import { useViewport } from '../../../../contexts/viewportSize';
import AppContext from '../../../../contexts/App';

const ProjectsHeader = () => {
  const { width } = useViewport();
  const breakpoint = 769;

  const { setModalIsOpen } = useContext(AppContext);

  return (
    <ProjectsHeaderContainer>
      <Count>
        <CountItem>
          <p>14</p>
          <p>Ready to Start</p>
        </CountItem>
        <CountItem>
          <p>29</p>
          <p>In Progress</p>
        </CountItem>
        <CountItem>
          <p>92</p>
          <p>Completed</p>
        </CountItem>
        <CountItem>
          <p>135</p>
          <p>Total Projects</p>
        </CountItem>
      </Count>
      <Button onClick={() => setModalIsOpen(true)}>
        {width < breakpoint ? <FaPlus color="#fff" size="19" /> : 'Add Project'}
      </Button>
    </ProjectsHeaderContainer>
  );
};

export default ProjectsHeader;
