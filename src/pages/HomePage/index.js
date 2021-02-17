import React from 'react';
import PlantTable from 'components/PlantTable';
import MainContainer from 'components/common/MainContainer';
import { HomeGrid, LeftSide, RightSide } from './style';
import Todos from 'components/Todos';
import WelcomeMessage from 'components/WelcomeMessage';

function HomePage() {
   return (
      <MainContainer>
         <HomeGrid>
            <LeftSide>
               <WelcomeMessage />
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
