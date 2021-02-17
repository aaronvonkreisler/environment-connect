import React from 'react';
import PlantTable from 'components/PlantTable';
import MainContainer from 'components/common/MainContainer';
import { HomeGrid, LeftSide, RightSide } from './style';
import Todos from 'components/Todos';
function HomePage() {
   return (
      <MainContainer>
         <HomeGrid>
            <LeftSide>
               <PlantTable />
            </LeftSide>
            <RightSide>
               <Todos />
            </RightSide>
         </HomeGrid>
      </MainContainer>
   );
}

export default HomePage;
