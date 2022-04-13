import React, { useState, useContext, useEffect } from 'react';
import { EditText } from 'react-edit-text';
import { useTheme } from 'styled-components';
import Description from './Description';
import DueDate from './DueDate';
import Participants from './Participants';
import Status from './Status';
import { DetailTitle, DetailMain, FirstInfoContainer } from './styles';
import Tasks from './Tasks';
import 'react-edit-text/dist/index.css';
import Modal from '../../../UI/ModalForm';
import ServicesTasks from '../../../../services/ServicesTasks';
import ServicesCustomer from '../../../../services/ServicesCustomer';
import AppContext from '../../../../contexts/App';

const DetailContainer = (props) => {
  const theme = useTheme();

  const {
    customerId,
    projectTitle,
    projectDescription,
    updateProject,
    projectDueDate,
    projectId,
    projectStatus,
  } = props;

  
  const [tasksData, setTasksData] = useState([]);
  
  const [customerData, setCustomerData] = useState({});
  
  useEffect(() => {
    ServicesCustomer.getCustomerById(customerId).then((data) => {
      setCustomerData(data);
    });
  }, []);
  
  useEffect(() => {
    ServicesTasks.getTasks().then((data) => {
      setTasksData(data);
    });
  }, []);
  
  const handleOnSave = ({ value, previousValue }) => {
    if (value !== previousValue) {
      updateProject({ project_title: value });
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

  const [title, setTitle] = useState(projectTitle);

  const { setModalIsOpen } = useContext(AppContext);

  const modalOnSubmit = (task) => {
    const updatedValue = {
      project_id: projectId,
      title: task.title,
      task_due_date: task.dueDate,
      task_description: task.description,
      task_responsable_id: '622e2f35e1f716a4bd1aade0',
      status: '6235b08b4a11c82ac30baa02',
    };
    ServicesTasks.createTask(updatedValue).then(() => {
      const withNewTask = [];
      withNewTask.push(...tasksData, updatedValue);
      setTasksData(withNewTask);
      setModalIsOpen(false);

      setModalIsOpen(false);
    });
  };

  return (
    <>
      <DetailTitle>
        <EditText
          type="text"
          name="projectTitle"
          value={title}
          onChange={setTitle}
          onSave={handleOnSave}
          style={{
            width: '100%',
            marginBottom: '10px',
            fontWeight: 600,
            fontSize: '1.5rem',
            lineHeight: 1.35,
            fontFamily: theme.font.family,
          }}
        />
        <h4>{customerData.customer_full_name}</h4>
      </DetailTitle>
      <DetailMain>
        <FirstInfoContainer>
          <Participants />
          <DueDate
            projectDueDate={projectDueDate}
            updateProject={updateProject}
          />
          <Status />
        </FirstInfoContainer>
        <Description
          projectDescription={projectDescription}
          updateProject={updateProject}
        />
        <Modal
          title="New Task"
          description="Add task details"
          section="Task"
          modalOnSubmit={modalOnSubmit}
        />

        <Tasks
          projectId={projectId}
          projectStatus={projectStatus}
          updateTask={updateTask}
          deleteTask={deleteTask}
          tasksData={tasksData}
        />
      </DetailMain>
    </>
  );
};

export default DetailContainer;
