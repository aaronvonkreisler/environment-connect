import React from 'react';
import { useHistory } from 'react-router';
import { RiPlantLine } from 'react-icons/ri';
import { getColorForLayer } from 'utils/utils';
import {
   StyledResult,
   PlantIcon,
   ItemText,
   RightSideLable,
   LeftSideText,
   TextWrapper,
   ColoredLable,
} from './style';

function ResultItem({ plant, closeMenu }) {
   let history = useHistory();
   const { plantName, layer, zone, id } = plant;
   const color = getColorForLayer(layer);
   return (
      <StyledResult
         onClick={() => {
            history.push(`/plants/${id}`);
            closeMenu();
         }}
      >
         <PlantIcon>
            <span>
               <RiPlantLine />
            </span>
         </PlantIcon>

         <TextWrapper>
            <LeftSideText>
               <ItemText>{plantName}</ItemText>
               <ItemText $secondary>
                  {layer} Layer | Zone {zone}
               </ItemText>
            </LeftSideText>
            <RightSideLable>
               <ColoredLable $color={color} />
            </RightSideLable>
         </TextWrapper>
      </StyledResult>
   );
}

export default ResultItem;
