import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Input, Select } from 'components/common/FormElements';
import Modal from 'components/Modal';
import useForm from 'hooks/useForm';
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
   const { formData, handleChange } = useForm(initialState);
   return (
      <Modal ref={modalRef}>
         <Input
            name="plantName"
            placeholder="Plant Name"
            inputType="text"
            value={formData.plantName}
            onChange={handleChange}
         />
         <Input
            name="zone"
            placeholder="Zone"
            inputType="text"
            value={formData.zone}
            onChange={handleChange}
         />

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

NewItemForm.propTypes = {};

export default NewItemForm;
