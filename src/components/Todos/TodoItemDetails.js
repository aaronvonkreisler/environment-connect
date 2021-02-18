import React, { useLayoutEffect, useState } from 'react';
import { PriorityBadge } from './TodoItemDetails.style';
import { getPriorityColor } from 'utils/utils';

function TodoItemDetails({ todo }) {
   const { priority, dueDate } = todo;
   const [color, setColor] = useState('');

   useLayoutEffect(() => {
      const { text } = getPriorityColor(priority);
      setColor(text);
   }, [priority]);

   return (
      <>
         <PriorityBadge $color={color}>
            <span>Priority: {priority}</span>
         </PriorityBadge>
      </>
   );
}

export default TodoItemDetails;
