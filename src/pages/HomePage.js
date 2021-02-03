import React, { useContext, useEffect } from 'react';
import TableSkeleton from 'components/PlantTable/TableSkeleton';
import PlantContext from 'context/plants/plantContext';

function HomePage() {
   const { fetchPlants, plants, fetching } = useContext(PlantContext);

   useEffect(() => {
      fetchPlants();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <>
         {fetching && <TableSkeleton />}
         {!fetching && plants && (
            <p style={{ color: 'white', fontSize: '20px' }}>{plants.length}</p>
         )}
      </>
   );
}

export default HomePage;
