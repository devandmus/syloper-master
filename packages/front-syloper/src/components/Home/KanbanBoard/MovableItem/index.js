import React, {useRef, useState, useEffect} from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { EditText, EditTextarea } from 'react-edit-text';
import { TaskCard, TDescription, TFooter, TTitle, TEstimatedHours } from './styles';
import BurgerIcon from '../../../UI/BurgerMenu/Icon';
import BurgerMenu from '../../../UI/BurgerMenu/Menu';
import { dateFormatter } from '../../../../utils/date';
import ServicesUser from '../../../../services/ServicesUser';
import Avatar from '../../../UI/avatar';
import 'react-edit-text/dist/index.css';
import StatusButton from '../../../UI/StatusButton';

const MovableItem = ({
  projectTitle,
  projectStatus,
  key,
  id,
  index,
  moveCardHandler,
  setTasksData,
  title,
  dueDate,
  description,
  estimatedHours,
  status,
  responsible,
  updateTask,
  deleteTask,
}) => {


  const [taskTitle, setTaskTitle] = useState(title);
  const [taskDescription, setTaskDescription] = useState(description);
  const [taskEstimatedHours, setTaskEstimatedHours] = useState(estimatedHours);
  const [taskDueDate, setTaskDueDate] = useState(dueDate);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const changeItemColumn = (currentItem, columnName) => {

    
    updateTask(currentItem.id, {status: columnName })

    setTasksData((prevState) => {
      return prevState.map((e) => {
        return {
          ...e,
          status: e.id === currentItem.id ? columnName : e.status,
        };
      });
    });
  };
  const ref = useRef(null);

  const [, drop] = useDrop({ 
      accept: 'CARD',
      hover(item, monitor) {
        if (!ref.current) {
            return;
        }
        const dragIndex = item.index;
        const hoverIndex = index;
        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
            return;
        }
        // Determine rectangle on screen
        const hoverBoundingRect = ref.current?.getBoundingClientRect();
        // Get vertical middle
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        // Determine mouse position
        const clientOffset = monitor.getClientOffset();
        // Get pixels to the top
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;
        // Only perform the move when the mouse has crossed half of the items height
        // When dragging downwards, only move when the cursor is below 50%
        // When dragging upwards, only move when the cursor is above 50%
        // Dragging downwards
        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
        }
        // Dragging upwards
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
        }
        // Time to actually perform the action
        moveCardHandler(dragIndex, hoverIndex);
        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        item.index = hoverIndex;
    },

    });

  const [{ isDragging }, drag] = useDrag({
    type: 'CARD',
    item: { index, id },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if(dropResult) {
        const { name } = dropResult;
        switch (name) {
          case 0:
            changeItemColumn(item, 0);
            break;
          case 1:
            changeItemColumn(item, 1);
            break;
          case 2:
            changeItemColumn(item, 2);
            break;
        }

      }
      
    },

    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0.4 : 1;

  drag(drop(ref));


  
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

  const handleSaveEstimatedHours = ({ value, previousValue }) => {
    if (value !== previousValue) {
      updateTask(id, { estimated_hours: value });
    }
  };

  const handleSaveDuedate = ({ value, previousValue }) => {
    if (value !== previousValue) {
      updateTask(id, { task_due_date: value });
    }
  };

  const handleClickMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  console.log(projectStatus);

  return (
    <TaskCard ref={ref} style={{ opacity }} key={key}>
      <BurgerIcon
        handleClickMenu={handleClickMenu}
        setIsOpenMenu={setIsOpenMenu}
      />


      <p>{projectTitle}</p>
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
      <TEstimatedHours>
      <div className='estimated-hours'>

        <p>Estimated hours:</p>
          <EditText
            type="number"
            onChange={setTaskEstimatedHours}
            onSave={handleSaveEstimatedHours}
            value={taskEstimatedHours}
            style={{
                fontWeight: 300,
                lineHeight: 1.3,
            }}

          />

      </div>

        </TEstimatedHours>


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

        <StatusButton status={status}/>
        <Avatar
          responsible={responsible}
        />
      </TFooter>
      <BurgerMenu
        handleClickMenu={handleClickMenu}
        deleteCard={() => deleteTask(id)}
        isOpenMenu={isOpenMenu}

      />
    </TaskCard>
  );
};

export default MovableItem;
