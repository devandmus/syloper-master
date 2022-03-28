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
              deleteProject={() => deleteProject(project.id)}
            />
          ))}
        </>
      )}
    </ProjectsGrid>
  );
};

export default ProjectsList;
