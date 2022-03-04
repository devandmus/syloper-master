import React, { useState } from 'react';
import { SectionTitle } from '../styles';
import { BiTask } from 'react-icons/all';
import { SelectStatus, StatusButton, TaskColumn, TaskContainer, TaskScroll } from './styles';

import Task from './Task';
import classNames from 'classnames';
import { useViewport } from '../../../../../contexts/viewportSize';
import tasksData from './tasksData.json';
const Tasks = ({ project_id }) => {

    const [ activeStatus, setActiveStatus ] = useState("status1");
    const { width } = useViewport();
    const breakpoint = 767;

    const handleStatusClick = (e) => {
        const name = e.target.id;
        setActiveStatus(name);
    }
    
    const ColumnsDesktop = () => 
        <>
            <TaskColumn>
                <h5>Ready to Start</h5>
                {tasksData.map((task, index) => task.status === 0 &&
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
                )}
            </TaskColumn>

            <TaskColumn>
                <h5>In Progress</h5>
                {tasksData.map((task, index) => task.status === 1 &&
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
                )}
            </TaskColumn>

            <TaskColumn>
                <h5>Completed</h5>
                {tasksData.map((task, index) => task.status === 2 &&
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
                )}
            </TaskColumn>
        </>

    const ColumnMobile = ({ title, status, tasks }) =>
        <TaskColumn>
            <h5>{title}</h5>
            <TaskScroll>
                {
                    tasks.map((task, index) => (
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
                    ))
                }
                <Task />
            </TaskScroll>
        </TaskColumn>

    const renderColumn = (selectedStatus) => {
        switch (selectedStatus) {
            case 'status1':
                return <ColumnMobile title="Pending" status={0} tasks={tasksData}/>

            case 'status2':
                return <ColumnMobile title="To Do" status={1} tasks={tasksData}/>

            case 'status3': 
                return <ColumnMobile title="Done" status={2} tasks={tasksData}/>
        
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
