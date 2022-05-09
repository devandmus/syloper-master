import React, {useRef, useState, useEffect} from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { EditText, EditTextarea } from 'react-edit-text';
import { TaskCard, TDescription, TFooter, TTitle, InputStyle, DataColumns } from './styles';
import BurgerIcon from '../../../UI/BurgerMenu/Icon';
import BurgerMenu from '../../../UI/BurgerMenu/Menu';
import { dateFormatter } from '../../../../utils/date';
import ServicesUser from '../../../../services/ServicesUser';
import Avatar from '../../../UI/avatar';
import 'react-edit-text/dist/index.css';
import StatusButton from '../../../UI/StatusButton';
import ServicesResponsible from '../../../../services/ServicesResponsible';
import ServicesProjects from '../../../../services/ServicesProjects';
import ProfileSelector from './ProfileSelector';
import AvatarSelector from './AvatarSelector';
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
  profile,
  projectId,
  updateTask,
  deleteTask,
}) => {


  const [taskTitle, setTaskTitle] = useState(title);
  const [projectTitleu, setProjectTitleu] = useState(projectTitle);
  const [taskDescription, setTaskDescription] = useState(description);
  const [taskEstimatedHours, setTaskEstimatedHours] = useState(estimatedHours);
  const [taskEstimatedCost, setTaskEstimatedCost] = useState()
  const [taskDueDate, setTaskDueDate] = useState(dueDate);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [responsibleData, setResponsible] = useState({})
  const [responsibleProfile, setResponsibleProfile] = useState({})

  useEffect(() => {

    ServicesUser.getUserById(responsible).then((data) => setResponsible(data))
    ServicesResponsible.getResponsibleTypesById(profile).then((data) => {

      setTaskEstimatedCost(data.hourly_cost)
      setResponsibleProfile(data)
    }
    )

    if (projectTitle === null) {
      ServicesProjects.getProjectDetail(projectId).then((data) => setProjectTitleu(data.project_title))
    }
  }, [])

  const updateHourlyCost = ({hourly_cost: value}) => {
    const updatedProfile = {
      ...responsibleProfile,
      ...{hourly_cost: value}
    }

    ServicesResponsible.updateResponsibleTypes(responsibleProfile.id, updatedProfile)
  }
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
  const handleSaveEstimatedCost = ({ value, previousValue }) => {
    if (value !== previousValue) {
      updateHourlyCost({ hourly_cost: value });
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

  const handleSaveAvatar = (responsible) => {
    updateTask(id, { task_responsible_user_id: responsible.id });
    setResponsible(responsible)

  }

  const handleSaveProfile = (profile) => {
    updateTask(id, { responsible_profile_id: profile.id });
    setResponsibleProfile(profile)

  }


  return (
    <TaskCard ref={ref} style={{ opacity }} key={key}>
      <BurgerIcon
        handleClickMenu={handleClickMenu}
        setIsOpenMenu={setIsOpenMenu}
      />


      <p>{projectTitleu}</p>
      <TTitle>
        <EditText
          type="text"
          value={taskTitle}
          onSave={handleSaveTitle}
          onChange={setTaskTitle}
          style={{
              width: '100%',
              fontWeight: 500,
              fontSize: '1.4rem',
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
              fontSize: '1.1rem',
              lineHeight: 1.3,
              marginBottom: '20px',
          }}
        />
      </TDescription>


      <DataColumns>
        <InputStyle>
          <div className='input-div'>
          <p>Profile</p>
            <ProfileSelector selected={responsibleProfile} handleSaveProfile={handleSaveProfile}/>
          </div>
        </InputStyle>

        <InputStyle>
          <div className='input-div'>
            <p>Estimated hours:</p>
              <EditText
                type="number"
                onChange={setTaskEstimatedHours}
                onSave={handleSaveEstimatedHours}
                value={taskEstimatedHours}
                style={{
                    lineHeight: 1.3,
                  }}
              />
          </div>
        </InputStyle>

        <InputStyle>
          <div className='input-div'>
            <p>Hourly Cost: </p>
            <div className='estimated-cost'>{'$ '+taskEstimatedCost}</div>
          </div>
        </InputStyle>

        <InputStyle>
          <div className='input-div'>
            <p>Total Estimated Cost: </p>
            <div className='estimated-cost'>{'$ '+taskEstimatedCost * taskEstimatedHours}</div>
          </div>
        </InputStyle>
      </DataColumns>

      <TFooter>
        <div className="input-div">
          <p>Due Date:</p>
          <EditText
            onSave={handleSaveDuedate}
            onChange={setTaskDueDate}
            type="date"
            value={taskDueDate}
            formatDisplayText={dateFormatter}
            style={{
            fontSize: '1.1rem',
            }}

          />
        </div>

        <StatusButton status={status}/>

        <AvatarSelector responsible={responsibleData} handleSaveAvatar={handleSaveAvatar}/>
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
