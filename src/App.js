import React, { Fragment } from 'react';
import Routes from 'routes/Routes';
import AuthProvider from 'context/auth/AuthProvider';

function App() {
   return (
      <Fragment>
         <AuthProvider>
            <Routes />
         </AuthProvider>
      </Fragment>
   );
}

export default App;
