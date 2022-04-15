import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Modal from '../../UI/ModalForm';
import Home from '../Home';
import Tasks from './Tasks';
import ServicesTasks from '../../../services/ServicesTasks';


const TasksMain = () => {
  const [tasksData, setTasksData] = useState([])

  useEffect(()=>{
    ServicesTasks.getTasks().then((data)=>{
      setTasksData(data)
  
    })

  }, [])

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



  const projectStatus = ["To do", "Doing", "Done"]


  return (
    <Home title="Tasks">
      <DndProvider backend={HTML5Backend}>
        <Tasks
        
        projectId={null}
        projectStatus={projectStatus}
        updateTask={updateTask}
        deleteTask={deleteTask}
        tasksData={tasksData}
      />
      </DndProvider>
      <Modal title="New Task" description="Add task details" section="Task" />
    </Home>
  );
}

export default TasksMain;
