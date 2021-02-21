import React from 'react';
import { WelcomeCard, WelcomeText } from './style';
import useAuth from 'hooks/useAuth';
import PersonSvg from './PersonSvg';
import { FlexCol } from 'components/common/StyledUtils';

function WelcomeMessage(props) {
   const { displayName } = useAuth();
   const firstName = displayName.split(' ')[0];
   return (
      <WelcomeCard>
         <FlexCol>
            <PersonSvg />
         </FlexCol>
         <FlexCol
            flexGrow="1"
            align="flex-start"
            justify="flex-start"
            margin="20px 10px 0 0"
         >
            <WelcomeText>Hi {firstName},</WelcomeText>
            <WelcomeText $large>What will you do today?</WelcomeText>
         </FlexCol>
      </WelcomeCard>
   );
}

export default WelcomeMessage;
