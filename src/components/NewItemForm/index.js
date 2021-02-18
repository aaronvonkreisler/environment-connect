import React, { useContext } from 'react';
import { LabledInput, LabledSelect } from 'components/common/FormElements';
import Modal from 'components/Modal';
import useForm from 'hooks/useForm';
import { StyledErrorMessage } from 'components/common/FormElements/style';
import PlantContext from 'context/plants/plantContext';
import AuthContext from 'context/auth/authContext';
import { layers } from 'constants/options';

const initialState = {
   plantName: '',
   zone: '',
   layer: '',
   hasDetails: false,
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
         <LabledInput
            border
            name="plantName"
            id="plant-name"
            inputType="text"
            value={formData.plantName}
            onChange={handleChange}
            onBlur={validateInput}
         >
            Plant name
         </LabledInput>
         {errors.plantName && (
            <StyledErrorMessage>{errors.plantName}</StyledErrorMessage>
         )}
         <LabledInput
            border
            name="zone"
            id="zone"
            inputType="text"
            value={formData.zone}
            onChange={handleChange}
            onBlur={validateInput}
         >
            Zone
         </LabledInput>
         {errors.zone && <StyledErrorMessage>{errors.zone}</StyledErrorMessage>}

         <LabledSelect
            name="layer"
            id="layer"
            value={formData.layer}
            onChange={handleChange}
            label="Layer"
            border
         >
            <option
               disabled
               defaultValue
               style={{ filter: 'blur(2px)' }}
               value=""
            ></option>
            {layers.map((layer, index) => (
               <option value={layer.label} key={index}>
                  {layer.label}
               </option>
            ))}
         </LabledSelect>
      </Modal>
   );
}

export default NewItemForm;
