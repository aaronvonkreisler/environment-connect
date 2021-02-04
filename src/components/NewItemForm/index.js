import React, { useContext } from 'react';
import { Input, Select } from 'components/common/FormElements';
import Modal from 'components/Modal';
import useForm from 'hooks/useForm';
import { mergeDocAndId } from 'utils/utils';
import { StyledErrorMessage } from 'components/common/FormElements/style';
import db from 'db';
import PlantContext from 'context/plants/plantContext';

const initialState = {
   plantName: '',
   zone: '',
   layer: '',
};

const layers = [
   {
      label: 'Canopy',
   },
   {
      label: 'Low Tree',
   },
   {
      label: 'Vertical',
   },
   {
      label: 'Shrub',
   },
   {
      label: 'Rhizosphere',
   },
   {
      label: 'Herbaveous',
   },

   {
      label: 'Soil Surface',
   },
];

function NewItemForm({ modalRef }) {
   const { addNewPlant } = useContext(PlantContext);
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
            addNewPlant(formData);
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
