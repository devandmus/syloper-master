import React from 'react';
import { MyTask, MyTasksContainer, MyTasksTitle } from './styles';

const MyTasks = () => {
  return (
    <MyTasksContainer>
      <MyTasksTitle>
        <h3>My Active Tasks</h3>
        <span>5</span>
      </MyTasksTitle>
      <MyTask>
        <h4>Develop frontend login</h4>
        <p>Due Date</p>
        <p>Fri, October 4, 2021</p>
      </MyTask>
      <MyTask>
        <h4>Develop frontend login</h4>
        <p>Due Date</p>
        <p>Fri, October 4, 2021</p>
      </MyTask>
      <MyTask>
        <h4>Develop frontend login</h4>
        <p>Due Date</p>
        <p>Fri, October 4, 2021</p>
      </MyTask>
    </MyTasksContainer>
  );
};

export default MyTasks;
