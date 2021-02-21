import React, { useEffect, useContext } from 'react';
import PlantContext from 'context/plants/plantContext';
import Table from './Table';
import EmptyDisplay from './EmptyDisplay';
import TableSkeleton from './TableSkeleton';

function PlantTable({ data }) {
   const { removePlant, fetchPlants, fetching, plants } = useContext(
      PlantContext
   );

   useEffect(() => {
      fetchPlants();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <>
         {fetching && <TableSkeleton />}
         {!fetching && plants?.length === 0 && <EmptyDisplay />}
         {!fetching && plants?.length > 0 && (
            <Table data={plants} removePlant={removePlant} />
         )}
      </>
   );
}

// {data.length === 0 ? (
//    <EmptyDisplay />
// ) : (
//    <Table data={data} removePlant={removePlant} />
// )}

PlantTable.propTypes = {};

export default PlantTable;
