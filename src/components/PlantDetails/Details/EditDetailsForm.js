import React from 'react';
import Modal from 'components/Modal';
import { LabledInput } from 'components/common/FormElements';
import { FlexRow } from 'components/common/StyledUtils';
function EditDetailsForm({ modalRef }) {
   return (
      <Modal
         title="Edit plant"
         buttonText="Save"
         onActionClick={() => console.log('On action click')}
         onCloseCallback={() => console.log('hi')}
         ref={modalRef}
      >
         <FlexRow align="center" justify="space-between">
            <LabledInput
               id="season"
               inputType="text"
               name="season"
               borderSmall
               spacing
            >
               Season
            </LabledInput>
            <LabledInput
               id="chillHours"
               inputType="text"
               name="chillHours"
               borderSmall
               spacing
            >
               Chill Hours
            </LabledInput>
         </FlexRow>
      </Modal>
   );
}

export default EditDetailsForm;
