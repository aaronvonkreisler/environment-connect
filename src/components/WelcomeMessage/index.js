import React from 'react';
import { WelcomeCard } from './style';
import useAuth from 'hooks/useAuth';
function WelcomeMessage(props) {
   const { displayName } = useAuth();
   return <WelcomeCard>Welcome</WelcomeCard>;
}

export default WelcomeMessage;
