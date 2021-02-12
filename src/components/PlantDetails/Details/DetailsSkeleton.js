import React from 'react';
import { DetailsCard, CardWrapper, Label, Text } from './style';

import SkeletonPulse from 'components/common/SkeletonPulse';

function DetailsSkeleton() {
   return (
      <>
         <DetailsCard>
            <CardWrapper>
               <Label>Season</Label>
               <Text>
                  <SkeletonPulse height="64px" />
               </Text>
            </CardWrapper>
         </DetailsCard>
         <DetailsCard>
            <CardWrapper>
               <Label>Desired Sun</Label>
               <Text>
                  {/* <span>Partial Shade</span> */}
                  <SkeletonPulse height="64px" />
               </Text>
            </CardWrapper>
         </DetailsCard>
         <DetailsCard $tall $last>
            <CardWrapper>
               <Label $small>Chill Hour Requirement</Label>
               <Text $small>
                  <SkeletonPulse height="22px" />
               </Text>
               <Label $small>Desired Water</Label>
               <Text $small>
                  <SkeletonPulse height="22px" />
               </Text>
               <Label $small>Nutiton needs</Label>
               <Text $small>
                  <SkeletonPulse height="22px" />
               </Text>
            </CardWrapper>
         </DetailsCard>
      </>
   );
}

export default DetailsSkeleton;
