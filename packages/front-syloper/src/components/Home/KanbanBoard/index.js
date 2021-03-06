import React, { useContext, useState, useEffect } from 'react';
import { BiTask } from 'react-icons/all';
import Column from './Column';
import Button from '../../UI/Button';
import Modal from '../../UI/ModalForm';
import AppContext from '../../../contexts/App';
import { SectionTitle } from '../../Common/styles';
import { Board } from './styles';
import MovableItem from './MovableItem';
import ServicesTasks from '../../../services/ServicesTasks';

const KanbanBoard = ({ projectId, projectTitle, projectStatus }) => {
  const [tasksData, setTasksData] = useState([]);

  useEffect(() => {
    ServicesTasks.getTasks().then((tasks) => {
      setTasksData(tasks);
    });
  }, []);

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
    // window.location.reload();
  };

  const deleteTask = (id) => {
    ServicesTasks.deleteTask(id).then(() => {
      setTasksData(tasksData.filter((task) => task.id !== id));
    });
  };

  const modalOnSubmit = (task) => {
    const updatedValue = {
      project_id: projectId,
      title: task.title,
      task_due_date: task.dueDate,
      task_description: task.description,
      task_responsible_user_id: task.responsibleId,
      responsible_profile_id: task.responsibleProfileId,
      estimated_hours: task.estimatedHours,
      status: 0,
    };
    ServicesTasks.createTask(updatedValue).then(() => {
      const withNewTask = [];
      withNewTask.push(...tasksData, updatedValue);
      setTasksData(withNewTask);
      setModalIsOpen(false);

      if (typeof window !== 'undefined') window.location.reload();
    });
  };

  const returnItemsForColumn = (columnName) => {
    return tasksData
      .filter((task) => {
        if (projectId === null) {
          return task.status === columnName;
        }
        return task.status === columnName && task.project_id === projectId;
      })
      .map((task, index) => (
        <MovableItem
          key={task.id}
          projectId={task.project_id}
          projectTitle={projectTitle}
          description={task.task_description}
          estimatedHours={task.estimated_hours}
          id={task.id}
          status={task.status}
          projectStatus={projectStatus}
          dueDate={task.task_due_date}
          profile={task.responsible_profile_id}
          responsible={task.task_responsible_user_id}
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
    <>
      <SectionTitle className="task-title">
        <div>
          <i>
            <BiTask />
          </i>
          <h5>Tasks</h5>
        </div>
        <Button onClick={() => setModalIsOpen(true)}>Add Task</Button>
      </SectionTitle>
      <Board>
        <Column title="To do" columnName={0}>
          {returnItemsForColumn(0)}
        </Column>

        <Column title="Doing" columnName={1}>
          {returnItemsForColumn(1)}
        </Column>
        <Column title="Done" columnName={2}>
          {returnItemsForColumn(2)}
        </Column>
        <Modal
          title="New Task"
          description="Add task details"
          section="Task"
          modalOnSubmit={modalOnSubmit}
          projectId={projectId}
        />
      </Board>
    </>
  );
};

export default KanbanBoard;
