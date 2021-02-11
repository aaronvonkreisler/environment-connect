import React from 'react';
import { FiEdit2, FiSun } from 'react-icons/fi';
import { WiNightAltSnowThunderstorm as SeasonsIcon } from 'react-icons/wi';
import { FaSnowflake } from 'react-icons/fa';
import {
   DetailsContainer,
   DetailsCard,
   CardWrapper,
   Label,
   Text,
   SunGradient,
   SeasonsGradient,
} from './style';

function Details() {
   return (
      <DetailsContainer>
         <DetailsCard>
            <CardWrapper>
               <Label>Season</Label>
               <SeasonsGradient />
               <Text>
                  <SeasonsIcon />

                  <span>Winter</span>
               </Text>
            </CardWrapper>
         </DetailsCard>
         <DetailsCard>
            <CardWrapper>
               <Label>Desired Sun</Label>
               <SunGradient />
               <Text>
                  <FiSun />
                  <span>Partial Shade</span>
               </Text>
            </CardWrapper>

            {/*Label row small grey text */}
            {/*Icon and value (large text) */}
         </DetailsCard>
      </DetailsContainer>
   );
}

export default Details;
