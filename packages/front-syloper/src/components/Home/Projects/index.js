import React, { useContext, useState, useEffect } from 'react';
import ModalForm from '../../UI/ModalForm';
import Home from '../Home';
import ProjectsHeader from './ProjectsHeader';
import ProjectsList from './ProjectsList';
import ServicesProjects from '../../../services/ServicesProjects';
import AppContext from '../../../contexts/App';

const Projects = () => {
  const { setModalIsOpen } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);

  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    ServicesProjects.getProjects().then((data) => {
      setProjectsData(data);
      setIsLoading(false);
    });
  }, []);

  const deleteProject = (id) => {
    ServicesProjects.deleteProject(id).then(
      setProjectsData(projectsData.filter((project) => project.id !== id))
    );
  };
  const modalOnSubmit = (project) => {
    const updatedProject = {
      customer_id: '622e7b309c6a98bb6282bc1b',
      project_due_date: project.dueDate,
      project_title: project.title,
      project_description: project.description,
      project_cost: 49792,
      project_responsable: 'Jesus',
      project_status_id: '622e7a9d6b3414b67e211b79',
      project_date: new Date(),
    };

    ServicesProjects.createProject(updatedProject).then(() => {
      const withNewProject = [];
      withNewProject.push(...projectsData, updatedProject);
      setProjectsData(withNewProject);
      setModalIsOpen(false);
    });
  };

  return (
    <Home title="Projects">
      <ProjectsHeader />
      <ProjectsList
        isLoading={isLoading}
        projectsData={projectsData}
        deleteProject={deleteProject}
      />
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
