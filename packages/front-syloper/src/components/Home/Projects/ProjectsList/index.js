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
              status={project.contextStatus}
              customerId={project.customer_id}
              title={project.project_title}
              description={project.project_description}
              responsableId={project.project_responsable}
              dueDate={project.project_due_date}
              id={project.id}
              responsibles={project.responsibles}
              taskLeft={project.taskLeft}
              deleteProject={() => deleteProject(project.id)}
            />
          ))}
        </>
      )}
    </ProjectsGrid>
  );
};

export default ProjectsList;
