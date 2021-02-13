import React, { useContext } from 'react';
import { FiSun } from 'react-icons/fi';
import { WiNightAltSnowThunderstorm as SeasonsIcon } from 'react-icons/wi';
import PlantContext from 'context/plants/plantContext';
import {
   DetailsContainer,
   DetailsCard,
   CardWrapper,
   Label,
   Text,
} from './style';
import DetailsSkeleton from './DetailsSkeleton';
import NoDetailsPrompt from './NoDetailsPrompt';

function Details({ modalRef }) {
   const { fetchingPlant, selectedPlant } = useContext(PlantContext);
   const {
      season,
      hasDetails,
      desiredSun,
      desiredWater,
      chillHours,
      nutritionNeeds,
   } = selectedPlant || {};
   console.log(season);
   return (
      <DetailsContainer>
         {fetchingPlant || !selectedPlant.plantName ? (
            <DetailsSkeleton />
         ) : hasDetails ? (
            <>
               <DetailsCard>
                  <CardWrapper>
                     <Label>Season</Label>
                     <Text>
                        <SeasonsIcon />
                        <span>{season && season}</span>
                     </Text>
                  </CardWrapper>
               </DetailsCard>
               <DetailsCard>
                  <CardWrapper>
                     <Label>Desired Sun</Label>
                     <Text>
                        <FiSun />
                        <span>{desiredSun && desiredSun}</span>
                     </Text>
                  </CardWrapper>
               </DetailsCard>
               <DetailsCard $tall $last>
                  <CardWrapper>
                     <Label $small>Chill Hour Requirement</Label>
                     <Text $small>
                        <span>{chillHours && chillHours}</span>
                     </Text>
                     <Label $small>Desired Water</Label>
                     <Text $small>
                        <span>{desiredWater && desiredWater}</span>
                     </Text>
                     <Label $small>Nutiton needs</Label>
                     <Text $small>
                        <span>{nutritionNeeds && nutritionNeeds}</span>
                     </Text>
                  </CardWrapper>
               </DetailsCard>
            </>
         ) : (
            <NoDetailsPrompt modalRef={modalRef} />
         )}
      </DetailsContainer>
   );
}

export default Details;
