import React, { useState } from 'react';
import { SectionTitle } from '../styles';
import { BiTask } from 'react-icons/all';
import { SelectStatus, StatusButton, TaskColumn, TaskContainer, TaskScroll } from './styles';
import Task from './Task';
import classNames from 'classnames';
import { useViewport } from '../../../../../contexts/viewportSize';

const Tasks = () => {

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
                <h5>Pending</h5>
                <TaskScroll>
                    <Task />
                </TaskScroll>
            </TaskColumn>
                
            <TaskColumn>
                <h5>To Do</h5>
                <TaskScroll>
                    <Task />
                    <Task />
                </TaskScroll>
            </TaskColumn>
                
            <TaskColumn>
                <h5>Done</h5>
                <TaskScroll>
                    <Task />
                    <Task />
                    <Task />
                </TaskScroll>
            </TaskColumn>
        </>

    const ColumnMobile = ({ title }) =>
        <TaskColumn>
            <h5>{title}</h5>
            <TaskScroll>
                <Task />
            </TaskScroll>
        </TaskColumn>

    const renderColumn = (selectedStatus) => {
        switch (selectedStatus) {
            case 'status1':
                return <ColumnMobile title="Pending" />

            case 'status2':
                return <ColumnMobile title="To Do" />

            case 'status3': 
                return <ColumnMobile title="Done" />
        
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