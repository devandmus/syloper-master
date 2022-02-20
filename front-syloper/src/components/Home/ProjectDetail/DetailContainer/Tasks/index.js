import React from 'react';
import { SectionTitle } from '../styles';
import { BiTask } from 'react-icons/bi'
import { TaskColumn, TaskContainer } from './styles';
import Task from './Task';

const tasksData = [    
    {
        project_id: "61ca2304422d3f1042b6f34a",
        task_date: "2021-12-30T16:46:18.000Z",
        task_due_date: "2022-01-30T16:46:18.000Z",
        task_description: "Esta es una descripcion de ejemplo para esta tarea de ejemplo",
        task_responsable_id: "91ca2304732d3f1542b6f3a4",
        createdAt: "2021-12-30T16:54:41.377Z",
        updatedAt: "2021-12-30T16:54:41.377Z",
        id: "61cde451c9973bbc0ce7de9f",
        title: "do something",//new
        status: 0 //new
    },
    {
        project_id: "61ca2304422d3f1042b6f34a",
        task_date: "2021-12-30T16:49:00.000Z",
        task_due_date: "2022-01-30T21:00:00.000Z",
        task_description: "Esta es una descripcion de ejemplo para esta tarea de ejemplo",
        task_responsable_id: "91ca2302832d3f1542b6f3a4",
        createdAt: "2021-12-30T16:55:52.380Z",
        updatedAt: "2021-12-30T16:55:52.380Z",
        id: "61cde498c9973bbc0ce7dea1",
        title: "do something",
        status: 0
    },
    {
        project_id: "61ca2304422d3f1042b6f34a",
        task_date: "2021-12-30T16:49:00.000Z",
        task_due_date: "2022-01-30T21:00:00.000Z",
        task_description: "Esta es una descripcion de ejemplo para esta tarea de ejemplo",
        task_responsable_id: "91ca2302832d3f1542b6f3a4",
        createdAt: "2021-12-30T16:55:52.380Z",
        updatedAt: "2021-12-30T16:55:52.380Z",
        id: "61cde498c9973bbc0ce7dea1",
        title: "do something",
        status: 1
    },
    {
        project_id: "61ca2304422d3f1042b6f34a",
        task_date: "2021-12-30T16:49:00.000Z",
        task_due_date: "2022-01-30T21:00:00.000Z",
        task_description: "Esta es una descripcion de ejemplo para esta tarea completada",
        task_responsable_id: "91ca2302832d3f1542b6f3a4",
        createdAt: "2021-12-30T16:55:52.380Z",
        updatedAt: "2021-12-30T16:55:52.380Z",
        id: "61cde498c9973bbc0ce7dea1",
        title: "do something",
        status: 2
    },
  ]



const Tasks = ({project_id}) => {


    return (
        <div>
            <SectionTitle>
                <i><BiTask /></i>
                <h5>Tasks</h5>
            </SectionTitle>
            <TaskContainer>
                <TaskColumn>
                    <h5>Ready to Start</h5>

                    {tasksData.map((task, index) =>

                        task.status === 0 ?
                        <Task
                        key={index}
                        task_id={task.task_id}
                        date={task.task_date}
                        due_date={task.task_due_date}
                        description={task.task_description}
                        responsable_id={task.task_responsable_id}
                        createdAt={task.createdAt}
                        updatedAt={task.updatedAt}
                        id={task.id}
                        title={task.title}
                        />
                        : null

                    )}

                </TaskColumn>
                <TaskColumn>
                    <h5>In Progress</h5>
                        {tasksData.map((task, index) =>

                        task.status === 1 ?
                        <Task
                        key={index}
                        task_id={task.task_id}
                        date={task.task_date}
                        due_date={task.task_due_date}
                        description={task.task_description}
                        responsable_id={task.task_responsable_id}
                        createdAt={task.createdAt}
                        updatedAt={task.updatedAt}
                        id={task.id}
                        title={task.title}
                                
                        />
                        : null

                    )}

                </TaskColumn>
                <TaskColumn>
                    <h5>Completed</h5>
                    {tasksData.map((task, index) =>

                        task.status === 2 ?
                        <Task
                        key={index}
                        task_id={task.task_id}
                        date={task.task_date}
                        due_date={task.task_due_date}
                        description={task.task_description}
                        responsable_id={task.task_responsable_id}
                        createdAt={task.createdAt}
                        updatedAt={task.updatedAt}
                        id={task.id}
                        title={task.title}
                                
                        />

                        : null
                    )}

                </TaskColumn>
            </TaskContainer>
        </div>
      );
}

export default Tasks;
