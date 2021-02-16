import React from 'react';
import { StyledTodo } from './style';
import { Checkbox } from 'components/common/FormElements';

const placeholderTodo = {
   title: 'Go to the store',
   complete: true,
};
function TodoItem({ todo = placeholderTodo }) {
   return (
      <StyledTodo>
         <Checkbox checked={todo.complete} />
      </StyledTodo>
   );
}

export default TodoItem;
