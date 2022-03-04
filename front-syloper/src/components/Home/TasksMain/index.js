import React from 'react';
import Modal from '../../UI/ModalForm';
import Home from '../Home';
import Tasks from '../ProjectDetail/DetailContainer/Tasks';

const TasksMain = () => (
  <Home title="Tasks">
    <Tasks />
    <Modal title="New Task" description="Add task details" section="Task" />
  </Home>
);

export default TasksMain;
