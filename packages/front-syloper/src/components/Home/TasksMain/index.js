import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Modal from '../../UI/ModalForm';
import Home from '../Home';
import Tasks from '../ProjectDetail/DetailContainer/Tasks';

const TasksMain = () => (
  <Home title="Tasks">
    <DndProvider backend={HTML5Backend}>
      <Tasks />
    </DndProvider>
    <Modal title="New Task" description="Add task details" section="Task" />
  </Home>
);

export default TasksMain;
