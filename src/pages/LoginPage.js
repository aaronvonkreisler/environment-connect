import React, { useContext } from 'react';
import Background from 'components/Login/Background';
import LoginForm from 'components/Login';
import AuthContext from 'context/auth/authContext';
import { Redirect } from 'react-router-dom';
function LoginPage() {
   const { isAuthenticated } = useContext(AuthContext);

   if (isAuthenticated) {
      return <Redirect to="/plants" />;
   }
   return (
      <>
         <Background />
         <LoginForm />
      </>
   );
}

export default LoginPage;
