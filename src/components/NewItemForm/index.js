import React from 'react';
import { Input, Select } from 'components/common/FormElements';
import Modal from 'components/Modal';
import useForm from 'hooks/useForm';
import db from 'db';
import { mergeDocAndId } from 'utils/utils';

const initialState = {
   plantName: '',
   zone: '',
   layer: '',
};

const layers = [
   {
      label: 'Canopy',
      value: 'canopy',
   },
   {
      label: 'Low Tree',
      value: 'low tree',
   },
   {
      label: 'Vertical',
      value: 'verticle',
   },
   {
      label: 'Shrub',
      value: 'shrub',
   },
   {
      label: 'Rhizosphere',
      value: 'rhizosphere',
   },
   {
      label: 'Herbaveous',
      value: 'herbaveous',
   },

   {
      label: 'Soil Surface',
      value: 'soil surface',
   },
];

function NewItemForm({ modalRef }) {
   const {
      formData,
      handleChange,
      validateInput,
      errors,
      resetFormState,
   } = useForm(initialState);

   const handleSubmit = async () => {
      const docRef = await db.collection('plants').add(formData);

      const doc = await docRef.get();

      const newPlant = mergeDocAndId(doc);
      console.log(newPlant);
   };
   return (
      <Modal
         ref={modalRef}
         title="Add a new plant"
         buttonText="Add plant"
         onActionClick={handleSubmit}
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
         {errors.plantName && <p>{errors.plantName}</p>}
         <Input
            name="zone"
            placeholder="Zone"
            inputType="text"
            value={formData.zone}
            onChange={handleChange}
            onBlur={validateInput}
         />
         {errors.zone && <p>{errors.zone}</p>}

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
               <option value={layer.value} key={index}>
                  {layer.label}
               </option>
            ))}
         </Select>
      </Modal>
   );
}

export default NewItemForm;
