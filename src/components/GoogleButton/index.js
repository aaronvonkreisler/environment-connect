import React from 'react';
import { GoogleWrapper } from './style';

function GoogleButton({ ...props }) {
   return (
      <GoogleWrapper role="button" aria-label="login with google" {...props}>
         <div>
            <img
               src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
               alt=""
            />
         </div>
         <span>Log in with Google</span>
      </GoogleWrapper>
   );
}

export default GoogleButton;
