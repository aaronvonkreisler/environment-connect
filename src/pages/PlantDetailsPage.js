import React from 'react';
import { DetailsGrid } from 'components/PlantDetails/style';
import Header from 'components/PlantDetails/Header';
import Notes from 'components/PlantDetails/Notes';
import Details from 'components/PlantDetails/Details';

function PlantDetailsPage() {
   return (
      <DetailsGrid>
         <Header />
         <Notes />
         <Details />
      </DetailsGrid>
   );
}

export default PlantDetailsPage;
