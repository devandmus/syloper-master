import React, { useState, useEffect } from 'react'
import Column from './Column'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Home from '../Home';
import { Board } from './styles'
import MovableItem from './MovableItem';
import ServicesTasks from '../../../services/ServicesTasks';
import { IoTimeSharp } from 'react-icons/io5';

const KanbanBoard = () => { 
    const [tasksData, setTasksData] = useState([
        {id: 1, name: 'item 1', column: 'Column 1'},
        {id: 2, name: 'item 2', column: 'Column 1'},
        {id: 3, name: 'item 3', column: 'Column 1'},

        
    ])

/*     useEffect(()=>{
        ServicesTasks.getTasks().then((data)=>{
            console.log(data);
          setTasksData(data)
      
        })
    
      }, []) */

      const returnItemsForColumn = (columnName) => {
          return tasksData
          .filter((item) => item.column === columnName)
          .map((item) => (
            <MovableItem key={item.id} name={item.name} setTasksData={setTasksData}/>

          ))
      }

     
    return (
        <Home title="Tasks">
            <Board>

                <DndProvider backend={HTML5Backend}>
                    <Column
                    title='Column 1'
                    >
                        {returnItemsForColumn('Column 1')}
                    </Column>

                    <Column
                    title='Column 2'
                    >
                        {returnItemsForColumn('Column 2')}
                    </Column>

                </DndProvider>

            </Board>

        
        </Home>
    )
 }

 export default KanbanBoard;