import React, { useState } from 'react';
import { StyledTodo } from './style';
import { Checkbox } from 'components/common/FormElements';

const placeholderTodo = {
   title: 'Go to the store',
   complete: true,
};
function TodoItem({ item = placeholderTodo }) {
   const [todo, setTodo] = useState(item);
   const handleCheck = (e) => {
      // will need to update in db
      console.log(todo);
      setTodo({ ...todo, complete: e.target.checked });
   };
   return (
      <StyledTodo>
         <Checkbox checked={todo.complete} onChange={handleCheck} />
         <span> Go to the store</span>
      </StyledTodo>
   );
}

export default TodoItem;
