import React, { useContext } from 'react';
import { Input, Select } from 'components/common/FormElements';
import Modal from 'components/Modal';
import useForm from 'hooks/useForm';
import { StyledErrorMessage } from 'components/common/FormElements/style';
import PlantContext from 'context/plants/plantContext';
import AuthContext from 'context/auth/authContext';
import { layers } from 'constants/layers';
const initialState = {
   plantName: '',
   zone: '',
   layer: '',
};

function NewItemForm({ modalRef }) {
   const { addNewPlant } = useContext(PlantContext);
   const { user } = useContext(AuthContext);
   const { uid } = user || {};
   const {
      formData,
      handleChange,
      validateInput,
      errors,
      resetFormState,
   } = useForm(initialState);

   return (
      <Modal
         ref={modalRef}
         title="Add a new plant"
         buttonText="Add plant"
         onActionClick={() => {
            const data = { ...formData, user: uid };
            addNewPlant(data);

            modalRef.current.closeModal();
         }}
         onCloseCallback={() => resetFormState(initialState)}
      >
         <Input
            name="plantName"
            placeholder="Plant Name"
            inputType="text"
            value={formData.plantName}
            onChange={handleChange}
            onBlur={validateInput}
         />
         {errors.plantName && (
            <StyledErrorMessage>{errors.plantName}</StyledErrorMessage>
         )}
         <Input
            name="zone"
            placeholder="Zone"
            inputType="text"
            value={formData.zone}
            onChange={handleChange}
            onBlur={validateInput}
         />
         {errors.zone && <StyledErrorMessage>{errors.zone}</StyledErrorMessage>}

         <Select name="layer" value={formData.layer} onChange={handleChange}>
            <option
               disabled
               defaultValue
               style={{ filter: 'blur(2px)' }}
               value=""
            >
               -- Select a Layer --
            </option>
            {layers.map((layer, index) => (
               <option value={layer.label} key={index}>
                  {layer.label}
               </option>
            ))}
         </Select>
      </Modal>
   );
}

export default NewItemForm;
