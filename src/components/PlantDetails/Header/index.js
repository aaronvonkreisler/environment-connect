import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { HeaderContainer, Title } from './style';
import WaveSvg from 'components/common/WaveSvg';
import PlantContext from 'context/plants/plantContext';

function Header({ plantName = 'Strawberries', color, match }) {
   const { fetchPlantById } = useContext(PlantContext);
   const { id } = useParams();

   useEffect(() => {
      fetchPlantById(id);
   }, [fetchPlantById, id]);
   return (
      <HeaderContainer>
         <WaveSvg fill="#2bbd7e" />
         <Title>{plantName}</Title>
      </HeaderContainer>
   );
}

export default Header;
