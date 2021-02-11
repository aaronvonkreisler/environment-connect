import React, { useState, useEffect, useContext } from 'react';
import Modal from 'components/Modal';
import { LabledInput, LabledSelect } from 'components/common/FormElements';
import { FlexRow, FlexCol } from 'components/common/StyledUtils';
import { layers } from 'constants/layers';
import useForm from 'hooks/useForm';
import PlantContext from 'context/plants/plantContext';

function EditDetailsForm({ modalRef }) {
   const { fetchingPlant, selectedPlant } = useContext(PlantContext);
   const [initialState, setInitialState] = useState({
      season: '',
      layer: '',
      zone: '',
      chillHours: '',
      desiredWater: '',
      nutritionNeeds: '',
      user: '',
   });
   const { formData, handleChange, resetFormState } = useForm(initialState);

   useEffect(() => {
      setInitialState({
         season:
            fetchingPlant || !selectedPlant.season ? '' : selectedPlant.season,
         layer:
            fetchingPlant || !selectedPlant.layer ? '' : selectedPlant.layer,
         zone: fetchingPlant || !selectedPlant.zone ? '' : selectedPlant.zone,
         chillHours:
            fetchingPlant || !selectedPlant.chillHours
               ? ''
               : selectedPlant.chillHours,
         desiredWater:
            fetchingPlant || !selectedPlant.desiredWater
               ? ''
               : selectedPlant.desiredWater,
         nutritionNeeds:
            fetchingPlant || !selectedPlant.nutritionNeeds
               ? ''
               : selectedPlant.nutritionNeeds,
         user: fetchingPlant || !selectedPlant.user ? '' : selectedPlant.user,
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [fetchingPlant, selectedPlant]);

   const handleSubmit = () => {
      console.log(formData);
   };

   return (
      <Modal
         title="Edit plant"
         buttonText="Save"
         onActionClick={handleSubmit}
         onCloseCallback={() => console.log('hi')}
         ref={modalRef}
      >
         <FlexRow align="center" justify="space-between">
            <LabledInput
               id="season"
               inputType="text"
               name="season"
               value={formData.season}
               onChange={handleChange}
               borderSmall
               spacing
            >
               Season
            </LabledInput>
         </FlexRow>
         <FlexRow
            align="center"
            justify="flex-start"
            style={{ marginTop: '10px' }}
         >
            <FlexCol style={{ width: '50%', padding: '0 5px' }}>
               <LabledSelect
                  id="layer"
                  name="layer"
                  borderSmall
                  spacing
                  label="Layer"
                  value={formData.layer}
                  onChange={handleChange}
               >
                  {layers.map((layer, index) => (
                     <option value={layer.label} key={index}>
                        {layer.label}
                     </option>
                  ))}
               </LabledSelect>
            </FlexCol>
            <FlexCol style={{ width: '33.33%', padding: '0 5px' }}>
               <LabledInput
                  id="zone"
                  inputType="text"
                  name="zone"
                  borderSmall
                  spacing
                  value={formData.zone}
                  onChange={handleChange}
               >
                  Zone
               </LabledInput>
            </FlexCol>
            <FlexCol style={{ width: '16.67%', padding: '0 5px' }}>
               <LabledInput
                  id="chill-hours"
                  inputType="text"
                  name="chillHours"
                  borderSmall
                  spacing
                  value={formData.chillHours}
                  onChange={handleChange}
               >
                  Chill Hours
               </LabledInput>
            </FlexCol>
         </FlexRow>
         <FlexRow
            align="center"
            justify="flex-start"
            style={{ marginTop: '10px' }}
         >
            <LabledInput
               id="desired-water"
               inputType="text"
               name="desiredWater"
               borderSmall
               spacing
               value={formData.desiredWater}
               onChange={handleChange}
            >
               Desired Water
            </LabledInput>
         </FlexRow>
         <FlexRow
            align="center"
            justify="flex-start"
            style={{ marginTop: '10px' }}
         >
            <LabledInput
               id="nutriton-needs"
               inputType="text"
               name="nutritionNeeds"
               borderSmall
               spacing
               value={formData.nutritionNeeds}
               onChange={handleChange}
            >
               Nutrition Needs
            </LabledInput>
         </FlexRow>
      </Modal>
   );
}

export default EditDetailsForm;