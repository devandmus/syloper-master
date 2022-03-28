import React, { useState } from 'react';
import { Link } from 'gatsby';
import {
  DueDate,
  Progress,
  ProjectCard,
  TasksTxt,
  Title,
  Users,
  UserImg,
} from './styles';
import { dateFormatter } from '../../../../../utils/date';
import BurgerIcon from '../../../../UI/BurgerMenu/Icon';
import BurgerMenu from '../../../../UI/BurgerMenu/Menu';

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
    deleteProject,
  } = props;

  const calcTranslate = (index) => `-${index * 2 * 10}`;

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleClickMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <ProjectCard>
      <BurgerIcon
        handleClickMenu={handleClickMenu}
        setIsOpenMenu={setIsOpenMenu}
      />
      <Link to={`/project-detail/?id=${id}`}>
        <Title>
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
      <BurgerMenu
        handleClickMenu={handleClickMenu}
        deleteCard={() => deleteProject(id)}
        isOpenMenu={isOpenMenu}
      />
    </ProjectCard>
  );
};

export default Project;
