import React from 'react';
import { Backdrop, Logo } from './style';
import logo from 'images/logoCropped.png';

function LoadingBackdrop() {
   return (
      <Backdrop>
         <Logo src={logo} alt="Environment Connect" />
      </Backdrop>
   );
}

export default LoadingBackdrop;
