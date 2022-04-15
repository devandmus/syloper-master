import React from 'react'
import { useDrag } from 'react-dnd'
import {Movable} from './styles'

const MovableItem = ({key, name, setTasksData}) => {
    const changeItemColumn = (currentItem, columnName) => {
        setTasksData((prevState) => {
            return prevState.map(e => {
                return {
                    ...e,
                    column: e.name === currentItem.name ? columnName: e.column,
                }
            })
        })
    }
    const [{ isDragging }, drag] = useDrag({
        type: "CARD",
        item: {name},
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()
            if (dropResult && dropResult.name === 'Column 1'){
                changeItemColumn(item, 'Column 1')
            } else {
                
                changeItemColumn(item, 'Column 2')
            }
        
        },

        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            
        }),
    });

    const opacity = isDragging ? 0.4 : 1;

    
    return (
        <Movable ref={drag} style={{  opacity }}>
            {name}
        </Movable>
    )
}

 export default MovableItem;