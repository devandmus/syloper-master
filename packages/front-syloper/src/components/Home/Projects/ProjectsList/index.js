import React from 'react';
import { ProjectsGrid } from './styles';
import Project from './Project';

const ProjectsList = ({ isLoading, projectsData, deleteProject }) => {
  return (
    <ProjectsGrid>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {projectsData.map((project) => (
            <Project
              customerId={project.customer_id}
              title={project.project_title}
              description={project.project_description}
              responsableId={project.project_responsable}
              dueDate={project.project_date}
              id={project.id}
              deleteProject={() => deleteProject(project.id)}
            />
          ))}
        </>
      )}
    </ProjectsGrid>
  );
};

export default ProjectsList;
