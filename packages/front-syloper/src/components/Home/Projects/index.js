import React, { useContext } from 'react';
import ModalForm from '../../UI/ModalForm';
import Home from '../Home';
import ProjectsHeader from './ProjectsHeader';
import ProjectsList from './ProjectsList';
import ServiceProjects from '../../../services/ServicesProjects';
import AppContext from '../../../contexts/App';

const Projects = () => {
  const { setModalIsOpen } = useContext(AppContext);
  const modalOnSubmit = (project) => {
    const updatedProject = {
      customer_id: '622e7b309c6a98bb6282bc1b',
      project_due_date: project.dueDate,
      project_title: project.title,
      project_description: project.description,
      project_cost: 49792,
      project_responsable: 'Jesus',
      project_status_id: '622e7a9d6b3414b67e211b79',
    };

    ServiceProjects.createProject(updatedProject).then(() => {
      setModalIsOpen(false);
    });
  };

  return (
    <Home title="Projects">
      <ProjectsHeader />
      <ProjectsList />
      <ModalForm
        title="New Project"
        description="Add project details"
        section="Project"
        modalOnSubmit={modalOnSubmit}
      />
    </Home>
  );
};

export default Projects;
