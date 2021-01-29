import React, { Fragment } from 'react';
import { GlobalStyle } from './constants/reset.css';
import AppThemeProvider from './components/AppTheme';
import AppBar from './components/AppBar';
import SideBar from './components/SideBar';
import MainContainer from './components/MainContainer';

function App() {
   return (
      <Fragment>
         <GlobalStyle />
         <AppThemeProvider>
            <AppBar />
            <SideBar />
            <MainContainer>
               <div>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dignissimos quam, dolores tenetur illum distinctio magni enim
                  sapiente velit quisquam deleniti dolorem veniam, corporis eum
                  quia, minus quasi necessitatibus pariatur aut?
               </div>
            </MainContainer>
         </AppThemeProvider>
      </Fragment>
   );
}

export default App;
