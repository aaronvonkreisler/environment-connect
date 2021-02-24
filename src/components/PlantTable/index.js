import React, { useEffect, useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import PlantContext from 'context/plants/plantContext';
import Table from './Table';
import EmptyDisplay from './EmptyDisplay';
import TableSkeleton from './TableSkeleton';
import ConfirmDelete from './ConfirmDelete';

function PlantTable({ data }) {
   const confirmModal = useRef();
   const [plantToRemove, setPlantToRemove] = useState(null);
   const { removePlant, fetchPlants, fetching, plants } = useContext(
      PlantContext
   );

   useEffect(() => {
      fetchPlants();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const handleDelete = (plant) => {
      // will need to confirm delete first as deleting should also delete any
      // associated notes/details
      // removePlant(id);
      setPlantToRemove(plant);
      confirmModal.current.openModal();
   };

   return (
      <>
         <ConfirmDelete
            modalRef={confirmModal}
            plant={plantToRemove}
            removePlant={removePlant}
         />
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
