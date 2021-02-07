import React, { useContext } from 'react';
import PlantContext from 'context/plants/plantContext';
import Table from './Table';
import EmptyDisplay from './EmptyDisplay';

function PlantTable({ data }) {
   const { removePlant } = useContext(PlantContext);

   return (
      <>
         {data.length === 0 ? (
            <EmptyDisplay />
         ) : (
            <Table data={data} removePlant={removePlant} />
         )}
      </>
   );
}

PlantTable.propTypes = {};

export default PlantTable;
