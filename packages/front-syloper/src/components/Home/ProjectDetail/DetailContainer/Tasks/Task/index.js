import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoCloseSharp } from 'react-icons/io5';
import classNames from 'classnames';
import { useDrag } from 'react-dnd';
import { dateFormatter } from '../../../../../../utils/date';
import {
  AssignImg,
  TaskCard,
  TDescription,
  TFooter,
  TTitle,
  TMenuIcon,
  TMenu,
} from './styles';

const Task = ({
  key,
  task_id,
  date,
  title,
  due_date,
  description,
  responsable_id,
  createdAt,
  updatedAt,
  id,
}) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const theme = useTheme();

  const handleClickMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const [{ isDragging }, dragRef] = useDrag({
    type: 'pet',
    item: { id, title },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <TaskCard ref={dragRef}>
      <TMenuIcon onClick={handleClickMenu}>
        <HiMenuAlt3 size="20" />
      </TMenuIcon>
      <TTitle>{title}</TTitle>
      <TDescription>{description}</TDescription>
      <TFooter>
        <div className="due-date">
          <p>Due Date:</p>
          <p>{dateFormatter(due_date)}</p>
        </div>
        <AssignImg />
      </TFooter>
      <TMenu className={classNames({ active: isOpenMenu })}>
        <i onClick={handleClickMenu}>
          <IoCloseSharp color="#fff" size="20px" />
        </i>
        <div>
          <p>Start Task</p>
          <p>Complete Task</p>
          <p>Edit</p>
          <p>Erase</p>
        </div>
      </TMenu>
    </TaskCard>
  );
};

export default Task;
