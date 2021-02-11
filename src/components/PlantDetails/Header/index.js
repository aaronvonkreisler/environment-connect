import React, { useState, useEffect, useContext } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import { HeaderContainer, Title, DetailsRow, DetailsPill } from './style';
import { getColorForLayer } from 'utils/utils';
import WaveSvg from 'components/common/WaveSvg';
import PlantContext from 'context/plants/plantContext';
import IconButton from 'components/common/IconButton';

function Header({ modalRef }) {
   const { selectedPlant, fetchingPlant } = useContext(PlantContext);
   const [fill, setFill] = useState('#4B89DC');

   useEffect(() => {
      if (selectedPlant.layer) {
         const color = getColorForLayer(selectedPlant.layer);
         setFill(color);
      }
   }, [selectedPlant]);

   const openEditForm = () => {
      modalRef.current.openModal();
   };
   return (
      <HeaderContainer>
         {fetchingPlant && <WaveSvg fill="4B89DC" />}
         {!fetchingPlant && selectedPlant && (
            <>
               <WaveSvg fill={fill} />
               <Title>{selectedPlant.plantName}</Title>
               <DetailsRow>
                  <div>
                     <DetailsPill>
                        <span>Zone: {selectedPlant.zone}</span>
                     </DetailsPill>
                     <DetailsPill>
                        <span>{selectedPlant.layer} Layer</span>
                     </DetailsPill>
                  </div>
                  <div>
                     <IconButton grey small={false} onClick={openEditForm}>
                        <FiEdit2 />
                     </IconButton>
                  </div>
               </DetailsRow>
            </>
         )}
      </HeaderContainer>
   );
}

export default Header;
