import React from 'react'
import { ColumnStyled } from './styles'
import { useDrop } from 'react-dnd'

const Column = ({children, title}) => { 

    const [{canDrop, isOver}, drop] = useDrop({
        accept: 'CARD',
        drop: () => ({name: title}),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });

    console.log('options', {canDrop, isOver});


    return (
        <ColumnStyled ref={drop} >
            {title}
            {children}
            
        
        </ColumnStyled>
    )
 }

 export default Column;