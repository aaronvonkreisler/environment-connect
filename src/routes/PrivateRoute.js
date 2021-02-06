import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from 'context/auth/authContext';

function PrivateRoute({ component: Component, ...rest }) {
   const { isAuthenticated, loading } = useContext(AuthContext);
   return (
      <Route
         {...rest}
         render={(props) =>
            loading ? (
               <p>Loading...</p>
            ) : isAuthenticated && !loading ? (
               <Component {...props} />
            ) : (
               <Redirect to="/" />
            )
         }
      />
   );
}

export default PrivateRoute;
