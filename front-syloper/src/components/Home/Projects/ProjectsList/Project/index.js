import React from 'react';
import { DueDate, Progress, ProjectContainer, TasksTxt, Title, Users, UserImg } from './styles';

const Project = () => {
    const users = [ "user1", "user2", "user3", "user4" ];

    const calcTranslate = (index) => {
        return `-${index * 2 * 10}`
    }

    return ( 
        <ProjectContainer>
            <Title>
                <h4>Web App Development</h4>
                <p>Client Name</p>
            </Title>
            <DueDate>Due date: October 4, 2021</DueDate>
            <Progress>
                <div className='bar-container'>
                    <span></span>
                </div>
                <div className='info-container'>
                    <p>In Progress</p>
                    <p>30%</p>
                </div>
            </Progress>
            <TasksTxt>10 Tasks left</TasksTxt>
            <Users>
                {
                    users.map((user, i) => {
                        return <UserImg key={i} translatex={calcTranslate(i)}></UserImg>
                    })
                }
            </Users>
        </ProjectContainer>
     );
}
 
export default Project;