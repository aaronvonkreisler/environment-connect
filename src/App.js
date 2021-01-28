import React, { Fragment } from 'react';
import { GlobalStyle } from './reset.css';
import AppBar from './components/AppBar';

function App() {
   return (
      <Fragment>
         <GlobalStyle />
         <AppBar />
      </Fragment>
   );
}

export default App;
