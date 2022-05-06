import React, { useContext, useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import Button from '../../../UI/Button';
import { Count, CountItem, ProjectsHeaderContainer } from './styles';
import { useViewport } from '../../../../contexts/viewportSize';
import AppContext from '../../../../contexts/App';
import ServiceBFF from '../../../../services/BFF';

const ProjectsHeader = () => {
  const [globalStatus, setGlobalStatus] = useState();
  const { width } = useViewport();
  const breakpoint = 769;

  const { setModalIsOpen } = useContext(AppContext);

  useEffect(() => {
    ServiceBFF.getUserDashboard().then((data) =>
      setGlobalStatus(data.globalStatus)
    );
  }, []);

  console.log(globalStatus);

  return (
    <ProjectsHeaderContainer>
      {/*       <Count>
        <CountItem>
          <p>{globalStatus.ready_to_start}</p>
          <p>Ready to Start</p>
        </CountItem>
        <CountItem>
          <p>{globalStatus.in_progress}</p>
          <p>In Progress</p>
        </CountItem>
        <CountItem>
          <p>{globalStatus.completed}</p>
          <p>Completed</p>
        </CountItem>
        <CountItem>
          <p>{globalStatus.total_projects}</p>
          <p>Total Projects</p>
        </CountItem>
      </Count> */}
      <Button onClick={() => setModalIsOpen(true)}>
        {width < breakpoint ? <FaPlus color="#fff" size="19" /> : 'Add Project'}
      </Button>
    </ProjectsHeaderContainer>
  );
};

export default ProjectsHeader;
