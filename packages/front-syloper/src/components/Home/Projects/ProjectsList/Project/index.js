import React from 'react';
import { Link } from 'gatsby';
import {
  DueDate,
  Progress,
  ProjectContainer,
  TasksTxt,
  Title,
  Users,
  UserImg,
} from './styles';
import { dateFormatter } from '../../../../../utils/date';

const Project = (props) => {
  const users = ['user1', 'user2', 'user3', 'user4'];
  const {
    index,
    customerId,
    customerName,
    description,
    cost,
    responsable,
    statusId,
    statusName,
    createdAt,
    dueDate,
    id,
    title,
  } = props;

  const calcTranslate = (index) => `-${index * 2 * 10}`;

  return (
    <ProjectContainer>
      <Link to={`/project-detail/?id=${id}`}>
        <Title>
          {/* <Link to="/project-detail/"> */}
          <h4>{title}</h4>
          <p>{description}</p>
        </Title>
        <DueDate>Due Date: {dateFormatter(dueDate)}</DueDate>
        <Progress>
          <div className="bar-container">
            <span />
          </div>
          <div className="info-container">
            <p>{statusName}</p>
            <p>30%</p>
          </div>
        </Progress>
        <TasksTxt>10 Tasks left</TasksTxt>
        <Users>
          {users.map((user, i) => (
            <UserImg key={i} translatex={calcTranslate(i)} />
          ))}
        </Users>
      </Link>
    </ProjectContainer>
  );
};

export default Project;
