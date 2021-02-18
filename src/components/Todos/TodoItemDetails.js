import React from 'react';
import { PriorityBadge, StyledDate } from './TodoItemDetails.style';
import { FlexCol, FlexRow } from 'components/common/StyledUtils';
import { formatDate } from 'utils/utils';

function TodoItemDetails({ todo, color, bg }) {
   const { priority, dueDate } = todo;
   window.item = todo;
   return (
      <>
         <FlexRow fullWidth margin="10px 0 0 0" justify="space-between">
            <FlexCol flexBasis="30%" align="flex-start">
               <PriorityBadge $color={color} $bg={bg}>
                  <span>Priority: {priority}</span>
               </PriorityBadge>
            </FlexCol>
            <FlexCol flexGrow="1" align="flex-end" justify="flex-start">
               <StyledDate>
                  Due: {dueDate ? formatDate(dueDate) : 'N/A'}
               </StyledDate>
            </FlexCol>
         </FlexRow>
         <FlexCol align="flex-start" fullWidth>
            <FlexRow justify="flex-start">Details</FlexRow>
            <FlexRow justify="flex-start">
               lots of details text lots of lots of lots
            </FlexRow>
         </FlexCol>
      </>
   );
}

export default TodoItemDetails;
