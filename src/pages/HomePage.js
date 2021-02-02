import React from 'react';
import PlantTable from 'components/PlantTable';
import { FlexCol, FlexRow } from 'components/common/StyledUtils/style';

function HomePage() {
   return (
      <FlexCol align="stretch">
         <FlexRow>
            <PlantTable />
         </FlexRow>
      </FlexCol>
   );
}

export default HomePage;
