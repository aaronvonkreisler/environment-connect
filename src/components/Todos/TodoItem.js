import React, { useState } from 'react';
import { ColorCircle, StyledTodo, TodoText } from './style';
import { Checkbox } from 'components/common/FormElements';
import { FlexCol, FlexRow } from 'components/common/StyledUtils';
import { getPriorityColor } from 'utils/utils';
import TodoItemDetails from './TodoItemDetails';

function TodoItem({ item, toggleTodo }) {
   const [toggleDetails, setToggleDetails] = useState(false);
   const handleCheck = (e) => {
      toggleTodo(item);
   };

   window.todo = item;

   return (
      <StyledTodo
         onClick={() => setToggleDetails(!toggleDetails)}
         $open={toggleDetails}
      >
         <FlexRow fullWidth justify="flex-start">
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
               <FlexRow fullWidth justify="space-between">
                  <TodoText $completed={item.completed}>{item.title}</TodoText>
                  <ColorCircle $color={getPriorityColor(item.priority)} />
               </FlexRow>
            </FlexCol>
         </FlexRow>
         <FlexRow fullWidth justify="flex-start">
            {toggleDetails && <TodoItemDetails todo={item} />}
         </FlexRow>
      </StyledTodo>
   );
}

export default TodoItem;
