import React from 'react';
import {
   LoginFormWrapper,
   Title,
   LoginCard,
   AlternateMethodText,
   Logo,
} from './style';
import { FlexRow } from 'components/common/StyledUtils';
import { LabledInput } from 'components/common/FormElements/';
import Button from 'components/common/Button';
import GoogleButton from 'components/GoogleButton';
import useForm from 'hooks/useForm';
import logoImage from 'images/logoCropped.png';
import { signInWithGoogle } from 'firebaseConfig/db';

const initialState = {
   email: '',
   password: '',
};

const LoginForm = () => {
   const { formData, resetFormState, handleChange } = useForm(initialState);

   const onSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      resetFormState(initialState);
   };

   // const onGoogleClick = () => {
   //    alert('Google Sign-in');
   // };
   return (
      <LoginFormWrapper role="presentation">
         <FlexRow justify="center">
            <Title>
               Environment <br /> Connect
            </Title>
         </FlexRow>
         <FlexRow>
            <LoginCard>
               <FlexRow justify="center">
                  <Logo src={logoImage} alt="Environment Connect" />
               </FlexRow>
               <form onSubmit={onSubmit}>
                  <LabledInput
                     id="email"
                     inputType="text"
                     border
                     name="email"
                     onChange={handleChange}
                     value={formData.email}
                  >
                     Email
                  </LabledInput>
                  <LabledInput
                     id="password"
                     inputType="password"
                     border
                     name="password"
                     onChange={handleChange}
                     value={formData.password}
                  >
                     Password
                  </LabledInput>
                  <FlexRow
                     style={{ marginTop: '10px', marginBottom: '10px' }}
                     justify="flex-start"
                  >
                     <Button type="submit" text="Log in" outline fullWidth />
                  </FlexRow>
               </form>
               <AlternateMethodText style={{ marginBottom: '10px' }}>
                  <span />
                  or
                  <span />
               </AlternateMethodText>
               <GoogleButton onClick={signInWithGoogle} />
            </LoginCard>
         </FlexRow>
      </LoginFormWrapper>
   );
};

export default LoginForm;
