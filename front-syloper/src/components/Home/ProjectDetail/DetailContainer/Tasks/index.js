import React from 'react';
import { SectionTitle } from '../styles';
import { BiTask } from 'react-icons/all'
import { TaskColumn, TaskContainer } from './styles';
import Task from './Task';

const Tasks = () => {
    return (
        <div>
            <SectionTitle>
                <i><BiTask /></i>
                <h5>Tasks</h5>
            </SectionTitle>
            <TaskContainer>
                <TaskColumn>
                    <h5>Ready to Start</h5>
                    <Task />
                    <Task />
                    <Task />
                    <Task />
                </TaskColumn>
                <TaskColumn>
                    <h5>In Progress</h5>
                    <Task />
                </TaskColumn>
                <TaskColumn>
                    <h5>Completed</h5>
                    <Task />
                    <Task />
                    <Task />
                </TaskColumn>
            </TaskContainer>
        </div>
      );
}
 
export default Tasks;