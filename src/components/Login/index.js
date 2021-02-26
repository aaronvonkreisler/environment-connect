import React from 'react';
import {
   LoginFormWrapper,
   WelcomeMessage,
   LoginCard,
   Logo,
   Copyright,
} from './style';
import { FlexCol } from 'components/common/StyledUtils';
import GoogleButton from 'components/GoogleButton';
import logoImage from 'images/transparent-text-logo.png';
import { signInWithGoogle } from 'firebaseConfig/db';

const LoginForm = () => {
   return (
      <LoginFormWrapper>
         <FlexCol>
            <Logo src={logoImage} alt="Environment Connect" />

            <LoginCard>
               <WelcomeMessage>
                  <h5>Welcome back!</h5>
                  <p>Sign in to continue with Environment Connect</p>
               </WelcomeMessage>
               <GoogleButton onClick={signInWithGoogle} />
            </LoginCard>
         </FlexCol>
         <Copyright>
            © 2021 Environment Connect. Designed and developed by{' '}
            <a
               href="https://github.com/aaronvonkreisler"
               target="_blank"
               rel="noopener noreferrer"
            >
               Aaron von Kreisler
            </a>
         </Copyright>
      </LoginFormWrapper>
   );
};

export default LoginForm;
