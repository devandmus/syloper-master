import React, { useContext, useEffect, useState } from 'react';
import { useDrop } from 'react-dnd';
import classNames from 'classnames';
import { BiTask } from 'react-icons/all';
import { SectionTitle } from '../styles';
import {
  SelectStatus,
  StatusButton,
  TaskColumn,
  TaskContainer,
  TaskScroll,
} from './styles';

import Task from './Task';
import { useViewport } from '../../../../../contexts/viewportSize';
import Button from '../../../../UI/Button';
import AppContext from '../../../../../contexts/App';

const Tasks = ({ tasksData, projectId, updateTask, deleteTask }) => {
  const [activeStatus, setActiveStatus] = useState('status1');
  const [taskStatusData, setTaskStatusData] = useState([
    {
      "task_status_description": "Ready to Start",
      "id": 0
    },
    {
      "task_status_description": "In Progress",
      "id": 1
    },
    {
      "task_status_description": "Completed",
      "id": 2
    }
  ]);
  const { setModalIsOpen } = useContext(AppContext);
  const { width } = useViewport();
  const breakpoint = 767;

  const handleStatusClick = (e) => {
    const name = e.target.id;
    setActiveStatus(name);
  };


  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'Our first type',
    drop: () => ({ name: 'Some name' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });
  const ColumnsDesktop = () => (
    <>
      {taskStatusData.map((taskStatus) => {
        return (
          <TaskColumn ref={drop}>
            <h5>{taskStatus.task_status_description}</h5>
            {projectId === null
              ? tasksData.filter((task) => task.status === taskStatus.id)
              : tasksData
                  .filter(
                    (task) =>
                      task.status === taskStatus.id &&
                      task.project_id === projectId
                  )
                  .map((task, index) => {
                    return (
                      <Task
                        key={index}
                        taskId={task.task_id}
                        date={task.task_date}
                        dueDate={task.task_due_date}
                        description={task.task_description}
                        responsableId={task.task_responsable_id}
                        createdAt={task.createdAt}
                        updatedAt={task.updatedAt}
                        id={task.id}
                        title={task.title}
                        updateTask={() => updateTask(task.id)}
                        deleteTask={() => deleteTask(task.id)}
                      />
                    );
                  })}
          </TaskColumn>
        );
      })}
    </>
  );

  const ColumnMobile = ({ title, status, tasks }) => (
    <TaskColumn>
      <h5>{title}</h5>
      <TaskScroll>
        {tasks.map((task) => {
          task.status === status && (
            <Task
              key={index}
              taskId={task.task_id}
              date={task.task_date}
              dueDate={task.task_due_date}
              description={task.task_description}
              responsableId={task.task_responsable_id}
              createdAt={task.createdAt}
              updatedAt={task.updatedAt}
              id={task.id}
              title={task.title}
              updateTask={updateTask}
            />
          );
        })}
        <Task />
      </TaskScroll>
    </TaskColumn>
  );

  const renderColumn = (selectedStatus) => {
    switch (selectedStatus) {
      case 'status1':
        return <ColumnMobile title="Pending" status="0" tasks={tasksData} />;

      case 'status2':
        return <ColumnMobile title="To Do" status="1" tasks={tasksData} />;

      case 'status3':
        return <ColumnMobile title="Done" status="2" tasks={tasksData} />;

      default:
        return 'no status';
    }
  };

  return (
    <div>
      <SectionTitle className="task-title">
        <div>
          <i>
            <BiTask />
          </i>
          <h5>Tasks</h5>
        </div>
        <Button onClick={() => setModalIsOpen(true)}>Add Task</Button>
      </SectionTitle>
      <SelectStatus>
        <StatusButton
          onClick={handleStatusClick}
          id="status1"
          className={classNames({ active: activeStatus === 'status1' })}
        >
          Pending
        </StatusButton>
        <StatusButton
          onClick={handleStatusClick}
          id="status2"
          className={classNames({ active: activeStatus === 'status2' })}
        >
          To Do
        </StatusButton>
        <StatusButton
          onClick={handleStatusClick}
          id="status3"
          className={classNames({ active: activeStatus === 'status3' })}
        >
          Done
        </StatusButton>
      </SelectStatus>
      <TaskContainer>
        {width < breakpoint ? renderColumn(activeStatus) : <ColumnsDesktop />}
      </TaskContainer>
    </div>
  );
};

export default Tasks;
