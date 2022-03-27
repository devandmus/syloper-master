import React from 'react';
import TaskColumnStyled from './styles';
import Task from '../Task';

const TaskColumn = () => {
  return (
    <TaskColumnStyled ref={drop}>
      <h5>{taskStatus.task_status_description}</h5>
      {tasksData
        .filter(
          (task) =>
            task.status === taskStatus.id && task.project_id === projectId
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
              updateTask={updateTask}
            />
          );
        })}
    </TaskColumnStyled>
  );
};

export default TaskColumn;
