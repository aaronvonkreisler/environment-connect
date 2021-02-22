import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import PlantContext from 'context/plants/plantContext';
import Table from './Table';
import EmptyDisplay from './EmptyDisplay';
import TableSkeleton from './TableSkeleton';
import useAlert from 'hooks/useAlert';

function PlantTable({ data }) {
   const { removePlant, fetchPlants, fetching, plants } = useContext(
      PlantContext
   );
   const showAlert = useAlert();

   useEffect(() => {
      fetchPlants();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const handleDelete = (id) => {
      // will need to confirm delete first as deleting should also delete any
      // associated notes/details
      removePlant(id);
   };

   return (
      <>
         {fetching && <TableSkeleton />}
         {!fetching && plants?.length === 0 && <EmptyDisplay />}
         {!fetching && plants?.length > 0 && (
            <Table data={plants} removePlant={handleDelete} />
         )}
      </>
   );
}

PlantTable.propTypes = {
   data: PropTypes.arrayOf(PropTypes.object),
};

export default PlantTable;
