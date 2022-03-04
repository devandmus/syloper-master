import React from 'react';
import ModalForm from '../../UI/ModalForm';
import Home from '../Home';
import ProjectsHeader from './ProjectsHeader';
import ProjectsList from './ProjectsList';

const Projects = () => (
  <Home title="Projects">
    <ProjectsHeader />
    <ProjectsList />
    <ModalForm
      title="New Project"
      description="Add project details"
      section="Project"
    />
  </Home>
);

export default Projects;
