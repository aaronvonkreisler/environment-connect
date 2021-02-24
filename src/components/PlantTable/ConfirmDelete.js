import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import Modal from 'components/Modal';
import {
   Wrapper,
   Icon,
   Message,
   PillButton,
   Actions,
} from './ConfirmDelete.style';

function ConfirmDelete({ modalRef, plant, removePlant }) {
   const onCancle = () => {
      modalRef.current.closeModal();
   };

   const onRemove = () => {
      removePlant(plant.id);
      modalRef.current.closeModal();
   };
   return (
      <Modal withActions={false} withTitle={false} ref={modalRef} small>
         <Wrapper>
            <Icon>
               <FiAlertTriangle />
            </Icon>
            <Message>
               <div>
                  Are you sure you want to remove{' '}
                  <span style={{ fontStyle: 'italic' }}>
                     {plant?.plantName}
                  </span>
                  ?
               </div>
               <div>
                  This will permanetely remove all associated notes and plant
                  details.
               </div>
            </Message>
            <Actions>
               <PillButton $left onClick={onCancle}>
                  Cancel
               </PillButton>
               <PillButton $danger onClick={onRemove}>
                  Remove
               </PillButton>
            </Actions>
         </Wrapper>
      </Modal>
   );
}

export default ConfirmDelete;
