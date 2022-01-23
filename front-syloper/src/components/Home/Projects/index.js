import React from 'react';
import Home from '../Home';
import ProjectsHeader from './ProjectsHeader';
import ProjectsList from './ProjectsList';

const Projects = () => {
    return (
        <Home title="Projects">
            <ProjectsHeader />
            <ProjectsList />
        </Home>
     );
}
 
export default Projects;