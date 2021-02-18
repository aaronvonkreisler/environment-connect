import React from 'react';
import { PriorityBadge, SecondaryText } from './TodoItemDetails.style';
import { FlexCol, FlexRow } from 'components/common/StyledUtils';
import { formatDate } from 'utils/utils';

function TodoItemDetails({ todo, color, bg }) {
   const { priority, dueDate, details } = todo;
   return (
      <>
         <FlexRow fullWidth margin="10px 0 0 0" justify="space-between">
            <FlexCol flexGrow="1" align="flex-start" justify="flex-start">
               <SecondaryText>
                  Due: {dueDate ? formatDate(dueDate) : 'n/a'}
               </SecondaryText>
            </FlexCol>
            <FlexCol flexBasis="30%" align="flex-end">
               <PriorityBadge $color={color} $bg={bg}>
                  <span>Priority: {priority}</span>
               </PriorityBadge>
            </FlexCol>
         </FlexRow>
         {details && (
            <FlexCol align="flex-start" fullWidth margin="10px 0 0 0">
               <FlexRow justify="flex-start">
                  <SecondaryText>Details</SecondaryText>
               </FlexRow>
               <FlexRow justify="flex-start">{details}</FlexRow>
            </FlexCol>
         )}
      </>
   );
}

export default TodoItemDetails;
