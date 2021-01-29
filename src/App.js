import React, { Fragment } from 'react';
import { GlobalStyle } from './constants/reset.css';
import AppBar from './components/AppBar';
import AppThemeProvider from './components/AppTheme';
function App() {
   return (
      <Fragment>
         <GlobalStyle />
         <AppThemeProvider>
            <AppBar />
         </AppThemeProvider>
      </Fragment>
   );
}

export default App;
