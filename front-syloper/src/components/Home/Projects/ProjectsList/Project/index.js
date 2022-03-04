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
    key,
    customerId,
    customerName,
    date,
    dueDate,
    description,
    cost,
    responsable,
    statusId,
    statusName,
    createdAt,
    updatedAt,
    id,
    title,
  } = props;

  const calcTranslate = (index) => {
    return `-${index * 2 * 10}`;
  };

  return (
    <ProjectContainer>
      <Title>
        {/* <Link to={`/project-detail/${id}`}> */}
        <Link to="/project-detail/">
          <h4>{title}</h4>
        </Link>
        <p>{customerName}</p>
      </Title>
      <DueDate>Due date: {dateFormatter(dueDate)}</DueDate>
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
    </ProjectContainer>
  );
};

export default Project;
