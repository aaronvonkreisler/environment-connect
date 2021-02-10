import React, { useState, useEffect, useContext } from 'react';
import { HeaderContainer, Title, DetailsRow, DetailsPill } from './style';
import { getColorForLayer } from 'utils/utils';
import WaveSvg from 'components/common/WaveSvg';
import PlantContext from 'context/plants/plantContext';

function Header(props) {
   const { selectedPlant, fetchingPlant } = useContext(PlantContext);
   const [fill, setFill] = useState('#4B89DC');

   useEffect(() => {
      if (selectedPlant) {
         const color = getColorForLayer(selectedPlant.layer);
         setFill(color);
      }
   }, [selectedPlant]);

   return (
      <HeaderContainer>
         {fetchingPlant && <WaveSvg />}
         {!fetchingPlant && selectedPlant && (
            <>
               <WaveSvg fill={fill} />
               <Title>{selectedPlant.plantName}</Title>
               <DetailsRow>
                  <DetailsPill>
                     <span>Zone: {selectedPlant.zone}</span>
                  </DetailsPill>
                  <DetailsPill>
                     <span>{selectedPlant.layer} Layer</span>
                  </DetailsPill>
               </DetailsRow>
            </>
         )}
      </HeaderContainer>
   );
}

export default Header;