import React, { useContext, useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { BiTask } from 'react-icons/all';
import Column from './Column';
import Button from '../../UI/Button';
import Modal from '../../UI/ModalForm';
import Home from '../Home';
import AppContext from '../../../contexts/App';

import {
  Board,
  TaskColumn,
  TaskScroll,
  SelectStatus,
  StatusButton,
  SectionTitle,
} from './styles';
import MovableItem from './MovableItem';
import ServicesTasks from '../../../services/ServicesTasks';

const KanbanBoard = () => {
  const [tasksData, setTasksData] = useState([]);

  useEffect(() => {
    ServicesTasks.getTasks().then((data) => {
      setTasksData(data);
    });
  }, []);

  const isMobile = window.innerWidth < 600;

  const { setModalIsOpen } = useContext(AppContext);

  const moveCardHandler = (dragIndex, hoverIndex) => {
    const dragTask = tasksData[dragIndex];

    if (dragTask) {
      setTasksData((prevState) => {
        const coppiedStateArray = [...prevState];

        const prevTask = coppiedStateArray.splice(hoverIndex, 1, dragTask);

        coppiedStateArray.splice(dragIndex, 1, prevTask[0]);
        return coppiedStateArray;
      });
    }
  };

  const updateTask = (id, task) => {
    const updatedTask = {
      ...tasksData,
      ...task,
    };
    ServicesTasks.updateTask(id, updatedTask);
  };

  const deleteTask = (id) => {
    ServicesTasks.deleteTask(id).then(() => {
      setTasksData(tasksData.filter((task) => task.id !== id));
    });
  };

  const returnItemsForColumn = (columnName) => {
    return tasksData
      .filter((task) => task.status === columnName)
      .map((task, index) => (
        <MovableItem
          description={task.task_description}
          id={task.id}
          dueDate={task.task_due_date}
          responsableId={task.task_responsible_user_id}
          title={task.title}
          setTasksData={setTasksData}
          index={index}
          moveCardHandler={moveCardHandler}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      ));
  };

  return (
    <Home title="Tasks">
      <SectionTitle className="task-title">
        <div>
          <i>
            <BiTask />
          </i>
          <h5>Tasks</h5>
        </div>
        <Button onClick={() => setModalIsOpen(true)}>Add Task</Button>
      </SectionTitle>
      <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
        <Board>
          <Column title={0}>{returnItemsForColumn(0)}</Column>

          <Column title={1}>{returnItemsForColumn(1)}</Column>
          <Column title={2}>{returnItemsForColumn(2)}</Column>
        </Board>
      </DndProvider>
      <Modal title="New Task" description="Add task details" section="Task" />
    </Home>
  );
};

export default KanbanBoard;
