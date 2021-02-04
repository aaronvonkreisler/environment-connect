import React, { useContext, useEffect } from 'react';
import PlantTable from 'components/PlantTable';
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
         {!fetching && plants && <PlantTable data={plants} />}
      </>
   );
}

export default HomePage;
