import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import Home from '../Home';
import KanbanBoard from '../KanbanBoard';

const Tasks = () => {
  const isMobile = window.innerWidth < 600;

  return (
    <Home title="Tasks">
      <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
        <KanbanBoard projectId={null} />
      </DndProvider>
    </Home>
  );
};

export default Tasks;
