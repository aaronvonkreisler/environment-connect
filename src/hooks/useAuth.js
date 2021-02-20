import { useContext } from 'react';
import AuthContext from 'context/auth/authContext';

const useAuth = () => {
   const { user, isAuthenticated } = useContext(AuthContext);

   const userValues = {
      id: user?.uid,
      displayName: user?.displayName,
      avatar: user?.photoURL,
      creationTime: user?.metadata.creationTime,
      lastSignIn: user?.metadata.lastSignInTime,
      isAuthenticated,
   };
   return userValues;
};

export default useAuth;
