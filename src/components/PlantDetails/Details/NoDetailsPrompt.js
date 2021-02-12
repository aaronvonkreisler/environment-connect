import React from 'react';
import { GoRocket } from 'react-icons/go';
import {
   DetailsCard,
   MessageContainer,
   RocketIcon,
   SecondaryText,
} from './style';
import { FlexRow } from 'components/common/StyledUtils';
import Button from 'components/common/Button';

function NoDetailsPrompt({ modalRef }) {
   const onClick = () => {
      modalRef.current.openModal();
   };

   return (
      <>
         <DetailsCard>
            <MessageContainer>
               <RocketIcon>
                  <GoRocket />
               </RocketIcon>

               <FlexRow align="center" justify="center" fullWidth>
                  <SecondaryText $size="24px">No details yet...</SecondaryText>
               </FlexRow>
               <FlexRow align="center" justify="center" fullWidth>
                  <SecondaryText>
                     Once you add some details, you'll see them here
                  </SecondaryText>
               </FlexRow>
               <FlexRow align="center" justify="center" fullWidth>
                  <SecondaryText>Click the button to get started</SecondaryText>
               </FlexRow>
               <div style={{ width: '100%', marginTop: '25px' }}>
                  <FlexRow align="center" justify="center" fullWidth>
                     <Button text="Get started" outline onClick={onClick} />
                  </FlexRow>
               </div>
            </MessageContainer>
         </DetailsCard>
      </>
   );
}

export default NoDetailsPrompt;
