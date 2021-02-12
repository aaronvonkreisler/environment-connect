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
   SunGradient,
   SeasonsGradient,
} from './style';
import DetailsSkeleton from './DetailsSkeleton';
import NoDetailsPrompt from './NoDetailsPrompt';

function Details({ modalRef }) {
   const { fetchingPlant, selectedPlant } = useContext(PlantContext);
   return (
      <DetailsContainer>
         {fetchingPlant || !selectedPlant.plantName ? (
            <DetailsSkeleton />
         ) : selectedPlant.hasDetails ? (
            <>
               <DetailsCard>
                  <CardWrapper>
                     <Label>Season</Label>
                     <SeasonsGradient />
                     <Text>
                        <SeasonsIcon />
                        <span>
                           {selectedPlant.season && selectedPlant.season}
                        </span>
                     </Text>
                  </CardWrapper>
               </DetailsCard>
               <DetailsCard>
                  <CardWrapper>
                     <Label>Desired Sun</Label>
                     <SunGradient />
                     <Text>
                        <FiSun />
                        <span>
                           {selectedPlant.desiredSun &&
                              selectedPlant.desiredSun}
                        </span>
                     </Text>
                  </CardWrapper>
               </DetailsCard>
               <DetailsCard $tall $last>
                  <CardWrapper>
                     <Label $small>Chill Hour Requirement</Label>
                     <Text $small>
                        <span>
                           {selectedPlant.chillHours &&
                              selectedPlant.chillHours}
                        </span>
                     </Text>
                     <Label $small>Desired Water</Label>
                     <Text $small>
                        <span>
                           {selectedPlant.desiredWater &&
                              selectedPlant.desiredWater}
                        </span>
                     </Text>
                     <Label $small>Nutiton needs</Label>
                     <Text $small>
                        <span>
                           {selectedPlant.nutritionNeeds &&
                              selectedPlant.nutritionNeeds}
                        </span>
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
