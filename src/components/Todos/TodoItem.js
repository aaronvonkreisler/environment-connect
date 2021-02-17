import React from 'react';
import { StyledTodo } from './style';
import { Checkbox } from 'components/common/FormElements';
import { FlexCol } from 'components/common/StyledUtils';

function TodoItem({ item, toggleTodo }) {
   const handleCheck = (e) => {
      toggleTodo(item);
   };
   return (
      <StyledTodo>
         <FlexCol
            justify="center"
            align="flexstart"
            fullWidth={false}
            flexBasis="24px"
         >
            <Checkbox checked={item.completed} onChange={handleCheck} />
         </FlexCol>
         <FlexCol
            flexGrow={1}
            justify="center"
            align="flexstart"
            fullWidth={false}
         >
            <span>{item.title}</span>
         </FlexCol>
      </StyledTodo>
   );
}

export default TodoItem;
