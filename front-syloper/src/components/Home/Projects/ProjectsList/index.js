import React from 'react';
import { ProjectsGrid } from './styles';
import Project from './Project'

const ProjectsList = () => {
    return ( 
        <ProjectsGrid>
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
        </ProjectsGrid>
     );
}
 
export default ProjectsList;