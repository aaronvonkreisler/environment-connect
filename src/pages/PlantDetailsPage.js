import React, { useContext, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { DetailsContainer, DetailsGrid } from 'components/PlantDetails/style';
import Header from 'components/PlantDetails/Header';
import Notes from 'components/PlantDetails/Notes';
import Details from 'components/PlantDetails/Details';
import EditDetailsForm from 'components/PlantDetails/Details/EditDetailsForm';
import PlantContext from 'context/plants/plantContext';

function PlantDetailsPage() {
   const { fetchPlantById, clearSlectedPlant } = useContext(PlantContext);
   const { id } = useParams();
   const editPlantModalRef = useRef();

   useEffect(() => {
      fetchPlantById(id);

      return () => {
         clearSlectedPlant();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <>
         <EditDetailsForm modalRef={editPlantModalRef} />
         <DetailsContainer>
            <DetailsGrid>
               <Header modalRef={editPlantModalRef} />
               <Notes />
               <Details />
            </DetailsGrid>
         </DetailsContainer>
      </>
   );
}

export default PlantDetailsPage;
