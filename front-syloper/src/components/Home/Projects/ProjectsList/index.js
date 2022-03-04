import React from 'react';
import { ProjectsGrid } from './styles';
import Project from './Project'
import projectsData from './projectsData.json';


const ProjectsList = () => ( 
    <ProjectsGrid>
            {projectsData.map((project, index) => 
                <Project
                    key={index}
                    customer_id={project.customer_id}
                    customer_name={project.customer_name}
                    description={project.project_description}
                    cost={project.project_cost}
                    responsable={project.project_responsable}
                    status_id={project.project_status_id}
                    status_name={project.project_status_name}
                    due_date={project.due_date}
                    createdAt={project.createdAt}
                    updatedAt={project.updatedAt}
                    id={project.id}
                    title={project.title}
                />
            )}
    </ProjectsGrid>
 )
 
export default ProjectsList;