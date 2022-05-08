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

  return (
    <ProjectCard key={id}>
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
        <Progress progress={projectContext.progress || 0}>
          <div className="bar-container">
            <span />
          </div>
          <div className="info-container">
            <p>{statusName}</p>
            <p>{projectContext.progress}%</p>
          </div>
        </Progress>
        <Footer>
          <TasksTxt>{projectContext.tasks_left || 0} Tasks left</TasksTxt>
          <StatusButton
            status={projectContext.project_status || 'Ready to Start'}
          />
          <Users>
            {projectContext.responsibles &&
              projectContext.responsibles.map((responsible, i) => (
                <Avatar
                  key={i}
                  translatex={calcTranslate(i)}
                  responsible={responsible}
                  name={false}
                />
              ))}
          </Users>
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
