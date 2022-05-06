import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import {
  DueDate,
  Progress,
  ProjectCard,
  TasksTxt,
  Title,
  Users,
  UserImg,
  Footer,
} from './styles';
import { dateFormatter } from '../../../../../utils/date';
import BurgerIcon from '../../../../UI/BurgerMenu/Icon';
import BurgerMenu from '../../../../UI/BurgerMenu/Menu';
import ServicesCustomer from '../../../../../services/ServicesCustomer';
import ServicesBff from '../../../../../services/BFF';
import StatusButton from '../../../../UI/StatusButton';
import Avatar from '../../../../UI/avatar';

const Project = ({
  customerId,
  statusName,
  dueDate,
  id,
  title,
  deleteProject,
}) => {
  const [customerData, setCustomerData] = useState({});

  const [projectContext, setprojectContext] = useState({});
  useEffect(() => {
    ServicesCustomer.getCustomerById(customerId).then((data) => {
      setCustomerData(data);
    });
    ServicesBff.getProject(id).then((data) => {
      setprojectContext(data);
    });
  }, []);

  const calcTranslate = (index) => `-${index * 2 * 10}`;

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleClickMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  console.log(projectContext.project_status);

  return (
    <ProjectCard>
      <BurgerIcon
        handleClickMenu={handleClickMenu}
        setIsOpenMenu={setIsOpenMenu}
      />
      <Link to={`/project-detail/?id=${id}`}>
        <Title>
          <h4>{title}</h4>
          <p>Customer: {customerData.customer_full_name}</p>
        </Title>
        <DueDate>Due Date: {dateFormatter(dueDate)}</DueDate>
        <Progress progress={projectContext.progress}>
          <div className="bar-container">
            <span />
          </div>
          <div className="info-container">
            <p>{statusName}</p>
            <p>{projectContext.progress}%</p>
          </div>
        </Progress>
        <Footer>
          <TasksTxt>{projectContext.tasks_left} Tasks left</TasksTxt>
          <StatusButton status={projectContext.project_status} />
          <Avatar responsibles={projectContext.responsibles} />
        </Footer>
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
