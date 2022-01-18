import React from 'react';
import Button from '../../../ui/Button';
import { Count, CountItem, ProjectsHeaderContainer } from './styles';
import { FaPlus  } from 'react-icons/all'
import { useViewport } from '../../../../contexts/viewportSize';

const ProjectsHeader = () => {
    const { width } = useViewport();
    const breakpoint = 769;

    return ( 
        <ProjectsHeaderContainer>
            <Count>
                <CountItem>
                    <p>14</p>
                    <p>Ready to Start</p>
                </CountItem>
                <CountItem>
                    <p>29</p>
                    <p>In Progress</p>
                </CountItem>
                <CountItem>
                    <p>92</p>
                    <p>Completed</p>
                </CountItem>
                <CountItem>
                    <p>135</p>
                    <p>Total Projects</p>
                </CountItem>
            </Count>
            <Button>{width < breakpoint ? <FaPlus color="#fff" size="19"/> : "Add Project"}</Button>
        </ProjectsHeaderContainer>
     );
}
 
export default ProjectsHeader;