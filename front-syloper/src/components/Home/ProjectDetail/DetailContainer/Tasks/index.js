import React, { useState } from 'react';
import { SectionTitle } from '../styles';
import { BiTask } from 'react-icons/all';
import { SelectStatus, StatusButton, TaskColumn, TaskContainer, TaskScroll } from './styles';

import Task from './Task';
import classNames from 'classnames';
import { useViewport } from '../../../../../contexts/viewportSize';

const Tasks = ({ project_id }) => {

    const [ activeStatus, setActiveStatus ] = useState("status1");
    const { width } = useViewport();
    const breakpoint = 767;

    const handleStatusClick = (e) => {
        const name = e.target.id;
        setActiveStatus(name);
    }
    
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

    const ColumnsDesktop = () => 
        <>
            <TaskColumn>
                <h5>Ready to Start</h5>
                {tasksData.map((task, index) => task.status === 0 ?
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
                : null )}
            </TaskColumn>

            <TaskColumn>
                <h5>In Progress</h5>
                {tasksData.map((task, index) => task.status === 1 ?
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
                : null )}
            </TaskColumn>

            <TaskColumn>
                <h5>Completed</h5>
                {tasksData.map((task, index) => task.status === 2 ?
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
                : null )}
            </TaskColumn>
        </>

    const ColumnMobile = ({ title, status, tasks }) =>
        <TaskColumn>
            <h5>{title}</h5>
            <TaskScroll>
                {
                    tasks.map(task => {
                        task.status === status &&
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
                    })
                }
                <Task />
            </TaskScroll>
        </TaskColumn>

    const renderColumn = (selectedStatus) => {
        switch (selectedStatus) {
            case 'status1':
                return <ColumnMobile title="Pending" status="0" tasks={tasksData}/>

            case 'status2':
                return <ColumnMobile title="To Do" status="1" tasks={tasksData}/>

            case 'status3': 
                return <ColumnMobile title="Done" status="2" tasks={tasksData}/>
        
            default:
                return 'no status'
        }
    }

    return (
        <div>
            <SectionTitle>
                <i><BiTask /></i>
                <h5>Tasks</h5>
            </SectionTitle>
            <SelectStatus>
                <StatusButton 
                    onClick={handleStatusClick}
                    id='status1'  
                    className={classNames({active: activeStatus === "status1"})}>Pending
                </StatusButton>
                <StatusButton 
                    onClick={handleStatusClick}
                    id='status2' 
                    className={classNames({active: activeStatus === "status2"})}>To Do
                </StatusButton>
                <StatusButton 
                    onClick={handleStatusClick}
                    id='status3'  
                    className={classNames({active: activeStatus === "status3"})}>Done
                </StatusButton>
            </SelectStatus>
            <TaskContainer>
                {
                    width < breakpoint ? renderColumn(activeStatus) : <ColumnsDesktop />
                }
            </TaskContainer>
        </div>
      );

}

export default Tasks;
