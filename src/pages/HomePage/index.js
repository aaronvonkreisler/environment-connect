import React, { useContext, useEffect } from 'react';
import PlantTable from 'components/PlantTable';
import TableSkeleton from 'components/PlantTable/TableSkeleton';
import PlantContext from 'context/plants/plantContext';
import MainContainer from 'components/common/MainContainer';
import { HomeGrid, LeftSide, RightSide } from './style';

function HomePage() {
   const { fetchPlants, plants, fetching } = useContext(PlantContext);

   useEffect(() => {
      fetchPlants();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <MainContainer>
         {fetching && <TableSkeleton />}
         {!fetching && plants && (
            <HomeGrid>
               <LeftSide>
                  <PlantTable data={plants} />
               </LeftSide>
               <RightSide>Todo section</RightSide>
            </HomeGrid>
         )}
      </MainContainer>
   );
}

export default HomePage;
