import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { IoTimeSharp } from 'react-icons/io5';
import Column from './Column';
import Home from '../Home';
import { Board } from './styles';
import MovableItem from './MovableItem';
import ServicesTasks from '../../../services/ServicesTasks';

const KanbanBoard = () => {
  const [tasksData, setTasksData] = useState([
    { id: 1, name: 'item 1', column: 'Column 1' },
    { id: 2, name: 'item 2', column: 'Column 1' },
    { id: 3, name: 'item 3', column: 'Column 1' },
  ]);

  const isMobile = window.innerWidth < 600;

  /*     useEffect(()=>{
        ServicesTasks.getTasks().then((data)=>{
            console.log(data);
          setTasksData(data)
      
        })
    
      }, []) */

  const moveCardHandler = (dragIndex, hoverIndex) => {
    const dragTask = tasksData[dragIndex];

    if (dragTask) {
      setTasksData((prevState) => {
        const coppiedStateArray = [...prevState];

        const prevTask = coppiedStateArray.splice(hoverIndex, 1, dragTask);

        coppiedStateArray.splice(dragIndex, 1, prevTask[0]);
        return coppiedStateArray;
      });
    }
  };

  const returnItemsForColumn = (columnName) => {
    return tasksData
      .filter((task) => task.column === columnName)
      .map((task, index) => (
        <MovableItem
          key={task.id}
          name={task.name}
          setTasksData={setTasksData}
          index={index}
          moveCardHandler={moveCardHandler}
        />
      ));
  };

  return (
    <Home title="Tasks">
      <Board>
        <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
          <Column title="Column 1">{returnItemsForColumn('Column 1')}</Column>

          <Column title="Column 2">{returnItemsForColumn('Column 2')}</Column>
        </DndProvider>
      </Board>
    </Home>
  );
};

export default KanbanBoard;
