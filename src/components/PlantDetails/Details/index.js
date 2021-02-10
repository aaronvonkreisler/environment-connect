import React from 'react';
import { FiEdit2, FiSun } from 'react-icons/fi';
import { GiWaterDrop } from 'react-icons/gi';
import { DetailsContainer, DetailsCard, Title, DetailItem } from './style';
import IconButton from 'components/common/IconButton';

function Details() {
   return (
      <DetailsContainer>
         <DetailsCard>
            <Title>
               <span>Details</span>
               <IconButton small grey onClick={() => alert('hi')}>
                  <FiEdit2 />
               </IconButton>
            </Title>
            <DetailItem>
               <span>GH Requirement</span>
            </DetailItem>
            <DetailItem>
               <FiSun />
               <span>Full Sun</span>
            </DetailItem>
            <DetailItem>
               <GiWaterDrop />
               <span>Moist - Well drained</span>
            </DetailItem>
         </DetailsCard>
      </DetailsContainer>
   );
}

export default Details;
