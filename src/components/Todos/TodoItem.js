import React, { useState } from 'react';
import { StyledTodo } from './style';
import { Checkbox } from 'components/common/FormElements';
import { FlexCol, FlexRow } from 'components/common/StyledUtils';

function TodoItem({ item }) {
   const [todo, setTodo] = useState(item);
   const handleCheck = (e) => {
      // will need to update in db
      console.log(todo);
      setTodo({ ...todo, complete: e.target.checked });
   };
   return (
      <StyledTodo>
         <FlexCol
            justify="center"
            align="flexstart"
            fullWidth={false}
            flexBasis="24px"
         >
            <Checkbox checked={todo.complete} onChange={handleCheck} />
         </FlexCol>
         <FlexCol
            flexGrow={1}
            justify="center"
            align="flexstart"
            fullWidth={false}
         >
            <span>{todo.title}</span>
         </FlexCol>
      </StyledTodo>
   );
}

export default TodoItem;
