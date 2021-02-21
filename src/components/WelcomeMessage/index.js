import React from 'react';
import { WelcomeCard, WelcomeText } from './style';
import useAuth from 'hooks/useAuth';
import PersonSvg from './PersonSvg';
import { FlexCol } from 'components/common/StyledUtils';
import useMediaQuery from 'hooks/useMediaQuery';

function WelcomeMessage(props) {
   const { displayName } = useAuth();
   const mobile = useMediaQuery('(max-width: 500px)');
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
            style={mobile ? { display: 'none' } : null}
         >
            <WelcomeText>Hi {firstName},</WelcomeText>
            <WelcomeText $large>What will you do today?</WelcomeText>
         </FlexCol>
      </WelcomeCard>
   );
}

export default WelcomeMessage;
