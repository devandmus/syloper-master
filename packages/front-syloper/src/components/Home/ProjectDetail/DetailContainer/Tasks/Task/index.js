import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { useDrag } from 'react-dnd';
import { EditText, EditTextarea } from 'react-edit-text';
import { dateFormatter } from '../../../../../../utils/date';
import { AssignImg, TaskCard, TDescription, TFooter, TTitle } from './styles';
import BurgerIcon from '../../../../../UI/BurgerMenu/Icon';
import BurgerMenu from '../../../../../UI/BurgerMenu/Menu';
import 'react-edit-text/dist/index.css';

const Task = ({
  taskId,
  date,
  title,
  dueDate,
  description,
  responsableId,
  createdAt,
  updatedAt,
  id,
  updateTask,
  deleteTask,
}) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleClickMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const [{ isDragging }, drag] = useDrag({
    type: 'drag',
    item: { id, title },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [taskTitle, setTaskTitle] = useState(title);
  const [taskDescription, setTaskDescription] = useState(description);
  const [taskDueDate, setTaskDueDate] = useState(dueDate);

  const handleSaveTitle = ({ value, previousValue }) => {
    if (value !== previousValue) {
      updateTask(id, { title: value });
    }
  };

  const handleSaveDescription = ({ value, previousValue }) => {
    if (value !== previousValue) {
      updateTask(id, { task_description: value });
    }
  };

  const handleSaveDuedate = ({ value, previousValue }) => {
    if (value !== previousValue) {
      updateTask(id, { task_due_date: value });
    }
  };

  return (
    <TaskCard ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <BurgerIcon
        handleClickMenu={handleClickMenu}
        setIsOpenMenu={setIsOpenMenu}
      />
      <TTitle>
        <EditText
          type="text"
          value={taskTitle}
          onSave={handleSaveTitle}
          onChange={setTaskTitle}
          style={{
            width: '100%',
            fontWeight: 500,
            fontSize: '1.1rem',
            marginBottom: '15px',
          }}
        />
      </TTitle>
      <TDescription>
        <EditTextarea
          onChange={setTaskDescription}
          onSave={handleSaveDescription}
          value={taskDescription}
          style={{
            width: '100%',
            fontSize: '0.9rem',
            fontWeight: 300,
            lineHeight: 1.3,
            marginBottom: '20px',
          }}
        />
      </TDescription>
      <TFooter>
        <div className="due-date">
          <p>Due Date:</p>
          <EditText
            onSave={handleSaveDuedate}
            onChange={setTaskDueDate}
            type="date"
            value={taskDueDate}
            formatDisplayText={dateFormatter}
            style={{
              fontSize: '.92rem',
              fontWeight: 500,
            }}
          />
        </div>
        <AssignImg />
      </TFooter>
      <BurgerMenu
        handleClickMenu={handleClickMenu}
        deleteCard={() => deleteTask(id)}
        isOpenMenu={isOpenMenu}
      />
    </TaskCard>
  );
};

export default Task;
