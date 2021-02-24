import React, { useEffect, useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import PlantContext from 'context/plants/plantContext';
import Table from './Table';
import EmptyDisplay from './EmptyDisplay';
import TableSkeleton from './TableSkeleton';
import Modal from 'components/Modal';

function PlantTable({ data }) {
   const confirmModal = useRef();
   const { removePlant, fetchPlants, fetching, plants } = useContext(
      PlantContext
   );

   useEffect(() => {
      fetchPlants();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const handleDelete = (id) => {
      // will need to confirm delete first as deleting should also delete any
      // associated notes/details
      // removePlant(id);
      confirmModal.current.openModal();
   };

   return (
      <>
         <Modal title="" ref={confirmModal} buttonText="Delete">
            Confirm
         </Modal>
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
