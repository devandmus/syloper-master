import React from 'react';
import { useDrop } from 'react-dnd';
import TaskColumn from './styles';

const Column = ({ children, title }) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'CARD',
    drop: () => ({ name: title }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  console.log('options', { canDrop, isOver });

  return (
    <TaskColumn ref={drop}>
      {title}
      {children}
    </TaskColumn>
  );
};

export default Column;
