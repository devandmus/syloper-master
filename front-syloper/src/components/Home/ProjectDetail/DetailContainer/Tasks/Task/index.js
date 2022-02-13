import React from 'react';
import { useTheme } from 'styled-components';
import { HiMenuAlt3 } from 'react-icons/hi';
import { IoCloseSharp } from 'react-icons/io5';
import {
  AssignImg,
  TaskCard,
  TDescription,
  TFooter,
  TTitle,
  TMenuIcon,
  TMenu,
} from './styles';

const Task = () => {
  const theme = useTheme();

  return (
    <TaskCard>
      <TMenuIcon>
        <HiMenuAlt3 size="20" color={theme.color.primaryGreen} />
      </TMenuIcon>
      <TTitle>Develop frontend login</TTitle>
      <TDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lorem
        odio, dapibus non nisi id, volutpat egestas diam
      </TDescription>
      <TFooter>
        <div className="due-date">
          <p>Due Date:</p>
          <p>Fri, October 4, 2021</p>
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
