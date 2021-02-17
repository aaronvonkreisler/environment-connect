import React from 'react';

function TodoItemDetails({ todo }) {
   const { priority, dueDate } = todo;
   return <div>priority: {priority}</div>;
}

export default TodoItemDetails;
