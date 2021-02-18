import React, { useContext } from 'react';
import { LabledInput, LabledSelect } from 'components/common/FormElements';
import Modal from 'components/Modal';
import useForm from 'hooks/useForm';
import { StyledErrorMessage } from 'components/common/FormElements/style';
import PlantContext from 'context/plants/plantContext';
import AuthContext from 'context/auth/authContext';
import { layers, sunOptions } from 'constants/options';
import { FlexCol, FlexRow } from 'components/common/StyledUtils';

const initialState = {
   plantName: '',
   zone: '',
   layer: '',
   desiredSun: '',
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
         <FlexRow fullWidth justify="flex-start">
            <FlexCol flexBasis="50%" margin="5px">
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
               {errors.zone && (
                  <StyledErrorMessage>{errors.zone}</StyledErrorMessage>
               )}
            </FlexCol>
            <FlexCol flexBasis="50%" margin="5px">
               <LabledSelect
                  id="desired-sun"
                  inputType="text"
                  name="desiredSun"
                  border
                  value={formData.desiredSun}
                  onChange={handleChange}
                  onBlur={validateInput}
                  label="Desired Sun"
               >
                  <option value="" defaultValue disabled>
                     {' '}
                  </option>
                  {sunOptions.map((opt, index) => (
                     <option value={opt.label} key={index}>
                        {opt.label}
                     </option>
                  ))}
               </LabledSelect>
               {errors.desiredSun && (
                  <StyledErrorMessage>{errors.desiredSun}</StyledErrorMessage>
               )}
            </FlexCol>
         </FlexRow>

         <LabledSelect
            name="layer"
            id="layer"
            value={formData.layer}
            onChange={handleChange}
            label="Layer"
            onBlur={validateInput}
            border
         >
            <option disabled defaultValue value=""></option>
            {layers.map((layer, index) => (
               <option value={layer.label} key={index}>
                  {layer.label}
               </option>
            ))}
         </LabledSelect>
         {errors.layer && (
            <StyledErrorMessage>{errors.layer}</StyledErrorMessage>
         )}
      </Modal>
   );
}

export default NewItemForm;
