import React from 'react';
import { DueDate, Progress, ProjectContainer, TasksTxt, Title, Users, UserImg } from './styles';
import { Link } from 'gatsby'
import { dateFormatter } from '../../../../../utils/date'

const Project = (props) => {
    const users = [ "user1", "user2", "user3", "user4" ];

    const {key, customer_id, customer_name, date, due_date, description, cost, responsable, status_id, status_name, createdAt, updatedAt, id, title} = props

    const calcTranslate = (index) => {
        return `-${index * 2 * 10}`
    }

    return ( 
        <ProjectContainer>
            <Title>
                {/* <Link to={`/project-detail/${id}`}> */}
                <Link to={`/project-detail/`}>
                <h4>{title}</h4>

                </Link>
                <p>{customer_name}</p>
            </Title>
            <DueDate>Due date: {dateFormatter(due_date)}</DueDate>
            <Progress>
                <div className='bar-container'>
                    <span></span>
                </div>
                <div className='info-container'>
                    <p>{status_name}</p>
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