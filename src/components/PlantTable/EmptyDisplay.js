import React from 'react';
import { TableContainer, MessageContainer, Message } from './style';
import NoDataSvg from 'components/common/NoDataSvg';
function EmptyDisplay() {
   return (
      <TableContainer>
         <MessageContainer>
            <NoDataSvg
               style={{ height: '400px', position: 'absolute', top: '-50px' }}
            />
            <Message>
               No plants yet, <br />
               When you add some, you'll see them here.
            </Message>
         </MessageContainer>
      </TableContainer>
   );
}

export default EmptyDisplay;
