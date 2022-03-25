import React, { useEffect, useState } from 'react';
import { ProjectsGrid } from './styles';
import Project from './Project';
import ServicesProjects from '../../../../services/ServicesProjects';

const ProjectsList = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    ServicesProjects.getProjects().then((data) => {
      setProjectsData(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <ProjectsGrid>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {projectsData.map((project) => (
            <Project
              customerId={project.customer_id}
              customerName={project.customer_name}
              title={project.project_title}
              description={project.project_description}
              cost={project.project_cost}
              responsable={project.project_responsable}
              statusId={project.project_status_id}
              statusName={project.project_status_name}
              dueDate={project.project_due_date}
              createdAt={project.createdAt}
              updatedAt={project.updatedAt}
              id={project.id}
            />
          ))}
        </>
      )}
    </ProjectsGrid>
  );
};

export default ProjectsList;
