import React, { useEffect, useReducer } from 'react';
import AuthContext from 'context/auth/authContext';
import { auth } from 'firebaseConfig/db';
import authReducer from 'context/auth/authReducer';
import { LOGIN_SUCCESS, LOGOUT } from 'context/types';

const initialState = {
   user: null,
   isAuthenticated: false,
   loading: true,
   error: null,
};

function AuthProvider(props) {
   const [state, dispatch] = useReducer(authReducer, initialState);

   const onAuthStateChange = () => {
      return auth.onAuthStateChanged((user) => {
         if (user) {
            dispatch({
               type: LOGIN_SUCCESS,
               payload: user,
            });
         } else {
            dispatch({
               type: LOGOUT,
            });
         }
      });
   };

   useEffect(() => {
      const unsubscribe = onAuthStateChange();
      return () => {
         unsubscribe();
      };
   }, []);

   const value = {
      user: state.user,
      loading: state.loading,
      isAuthenticated: state.isAuthenticated,
      error: state.error,
   };

   return (
      <AuthContext.Provider value={value}>
         {props.children}
      </AuthContext.Provider>
   );
}

export default AuthProvider;
