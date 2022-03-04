import React from 'react';
import { useTheme } from 'styled-components';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoCloseSharp } from 'react-icons/io5';
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

const Task = (props) => {
  const {
    key,
    taskId,
    date,
    title,
    dueDate,
    description,
    responsableId,
    createdAt,
    updatedAt,
    id,
  } = props;

  const theme = useTheme();

  return (
    <TaskCard>
      <TMenuIcon>
        <HiMenuAlt3 size="20" color={theme.color.primaryGreen} />
      </TMenuIcon>
      <TTitle>{title}</TTitle>
      <TDescription>{description}</TDescription>
      <TFooter>
        <div className="due-date">
          <p>Due Date:</p>
          <p>{dateFormatter(dueDate)}</p>
        </div>
        <AssignImg />
      </TFooter>
      <TMenu>
        <i>
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
