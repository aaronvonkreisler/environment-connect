import React, { useContext, useEffect } from 'react';
import { DetailsGrid } from 'components/PlantDetails/style';
import Header from 'components/PlantDetails/Header';
import Notes from 'components/PlantDetails/Notes';
import Details from 'components/PlantDetails/Details';
import PlantContext from 'context/plants/plantContext';
import { useParams } from 'react-router-dom';

function PlantDetailsPage() {
   const {
      fetchPlantById,
      selectedPlant,
      fetchingPlant,
      clearSlectedPlant,
   } = useContext(PlantContext);
   const { id } = useParams();

   useEffect(() => {
      fetchPlantById(id);

      return () => {
         clearSlectedPlant();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <DetailsGrid>
         {fetchingPlant || !selectedPlant ? (
            <p>...loading</p>
         ) : (
            <Header
               title={selectedPlant.plantName}
               layer={selectedPlant.layer}
            />
         )}

         <Notes />
         <Details />
      </DetailsGrid>
   );
}

export default PlantDetailsPage;
