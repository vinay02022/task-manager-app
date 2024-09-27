import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const TaskCard = ({ task, index }) => {
  return (
    <Draggable key={task.id} draggableId={task.id} index={index}>
      {(provided) => (
        <div 
          ref={provided.innerRef} 
          {...provided.draggableProps} 
          {...provided.dragHandleProps}
          className="bg-blue-500 text-white rounded-md p-3 mb-2 cursor-pointer"
        >
          {task.title}
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;