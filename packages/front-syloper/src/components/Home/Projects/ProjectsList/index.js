import React, { useEffect, useState } from 'react';
import { ProjectsGrid } from './styles';
import Project from './Project';
import ServicesProjects from '../../../../services/ServicesProjects';

const ProjectsList = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    ServicesProjects.getProjects().then((data) => {
      setProjectsData(data);
    });
  }, [projectsData]);
  return (
    <ProjectsGrid>
      {projectsData.map((project, index) => (
        <Project
          key={index}
          customerId={project.customer_id}
          customerName={project.customer_name}
          description={project.project_description}
          cost={project.project_cost}
          responsable={project.project_responsable}
          statusId={project.project_status_id}
          statusName={project.project_status_name}
          createdAt={project.createdAt}
          updatedAt={project.updatedAt}
          id={project.id}
          title={project.title}
        />
      ))}
    </ProjectsGrid>
  );
};

export default ProjectsList;
