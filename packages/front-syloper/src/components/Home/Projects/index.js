import React, { useContext, useState, useEffect } from 'react';
import ModalForm from '../../UI/ModalForm';
import Home from '../Home';
import ProjectsHeader from './ProjectsHeader';
import ProjectsList from './ProjectsList';
import ServicesProjects from '../../../services/ServicesProjects';
import AppContext from '../../../contexts/App';
import ModalMessage from '../../UI/ModalMessageBox';

const Projects = () => {
  const { setModalIsOpen } = useContext(AppContext);
  const { setModalMessageIsOpen } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    ServicesProjects.getProjects().then((data) => {
      setProjectsData(data);
      setIsLoading(false);
    });
  }, []);

  const deleteProject = (id) => {
    ServicesProjects.deleteProject(id).then((response) => {
      if (response.status === 200) {
        setErrorMsg('Successfully removed');
        setModalMessageIsOpen(true);
        setProjectsData(projectsData.filter((project) => project.id !== id));
      } else if (response.status === 423) {
        setErrorMsg(`Can't remove it. There are tasks depending on it.`);
        setModalMessageIsOpen(true);
      }
    });
  };

  const modalOnSubmit = (project) => {
    const updatedProject = {
      project_date: Date.now(),
      project_due_date: project.dueDate,
      project_title: project.title,
      project_description: project.description,
      customer_id: project.customerId,
      project_responsable: project.responsibleId,
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
      <p>{errorMsg}</p>
      <ProjectsList
        isLoading={isLoading}
        projectsData={projectsData}
        deleteProject={deleteProject}
      />
      <ModalMessage title="Message" message={errorMsg} />
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
