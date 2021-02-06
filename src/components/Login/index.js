import React from 'react';
import { LoginFormWrapper, Title } from './style';
import { FlexRow, FlexCol } from 'components/common/StyledUtils/style';
import logoImage from 'images/logoCropped.png';
import { Input } from 'components/common/FormElements/';

const LoginForm = () => {
   return (
      <LoginFormWrapper role="presentation">
         <FlexRow>
            <Title>Environment Connect</Title>
         </FlexRow>
         <FlexRow>Aaron!!</FlexRow>
      </LoginFormWrapper>
   );
};

export default LoginForm;
