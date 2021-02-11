import React from 'react';
import { FiSun } from 'react-icons/fi';
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
         </DetailsCard>
         <DetailsCard $tall $last>
            <CardWrapper>
               <Label $small>Chill Hour Requirement</Label>
               <Text $small>
                  <span>200-300</span>
               </Text>
               <Label $small>Desired Water</Label>
               <Text $small>
                  <span>Moist well drained /light loamy soil</span>
               </Text>
               <Label $small>Nutiton needs</Label>
               <Text $small>
                  <span>
                     Nitrogen, calcium, phosphorus, magnesium, sulfur and
                     potassium.
                  </span>
               </Text>
            </CardWrapper>
         </DetailsCard>
      </DetailsContainer>
   );
}

export default Details;
