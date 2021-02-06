import React from 'react';
import { TableContainer, MessageContainer, Message } from './style';
import wavesImage from 'images/waves.svg';
function EmptyDisplay() {
   return (
      <TableContainer>
         <MessageContainer>
            <Message>
               Add some plants <br /> to get started
            </Message>
            <img src={wavesImage} alt="" style={{ flexGrow: 1 }} />
         </MessageContainer>
      </TableContainer>
   );
}

export default EmptyDisplay;
