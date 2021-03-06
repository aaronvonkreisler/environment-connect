import React, { useState, useEffect, useContext } from 'react';
import Modal from 'components/Modal';
import { LabledInput, LabledSelect } from 'components/common/FormElements';
import { FlexRow, FlexCol } from 'components/common/StyledUtils';
import { layers, sunOptions } from 'constants/options';
import useForm from 'hooks/useForm';
import PlantContext from 'context/plants/plantContext';

function EditDetailsForm({ modalRef }) {
   const { fetchingPlant, selectedPlant, updatePlant } = useContext(
      PlantContext
   );
   const [initialState, setInitialState] = useState({
      season: '',
      layer: '',
      zone: '',
      chillHours: '',
      desiredWater: '',
      desiredSun: '',
      nutritionNeeds: '',
      hasDetails: true,
   });
   const { formData, handleChange } = useForm(initialState);

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
         desiredSun:
            fetchingPlant || !selectedPlant.desiredSun
               ? ''
               : selectedPlant.desiredSun,
         nutritionNeeds:
            fetchingPlant || !selectedPlant.nutritionNeeds
               ? ''
               : selectedPlant.nutritionNeeds,
         hasDetails: true,
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [fetchingPlant, selectedPlant]);

   const handleSubmit = () => {
      updatePlant(selectedPlant.id, formData);
      modalRef.current.closeModal();
   };
   return (
      <Modal
         title="Edit plant"
         buttonText="Save"
         onActionClick={handleSubmit}
         ref={modalRef}
      >
         <FlexRow align="center" justify="flex-start" fullWidth>
            <FlexCol flexBasis="50%" margin="0 10px 0 0">
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
            </FlexCol>

            <FlexCol flexBasis="50%">
               <LabledSelect
                  id="desired-sun"
                  inputType="text"
                  name="desiredSun"
                  borderSmall
                  spacing
                  value={formData.desiredSun}
                  onChange={handleChange}
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
            </FlexCol>
         </FlexRow>
         <FlexRow
            align="center"
            justify="flex-start"
            style={{ marginTop: '10px' }}
            fullWidth
         >
            <FlexCol flexBasis="45%" margin="0 5px">
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
            <FlexCol flexBasis="33.33%" margin="0 5px">
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
            <FlexCol flexBasis="16.67%" margin="0 5px">
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
            fullWidth
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
            fullWidth
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
