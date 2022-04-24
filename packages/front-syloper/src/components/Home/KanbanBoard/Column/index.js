/* eslint-disable prettier/prettier */
import React from 'react';
import { useDrop } from 'react-dnd';
import TaskColumn from './styles';

const Column = ({ children, title, columnName }) => {
  const [, drop] = useDrop({
    accept: 'CARD',
    drop: () => ({ name: columnName }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <TaskColumn ref={drop}>
      {title}
      {children}
    </TaskColumn>
  );
};

export default Column;
