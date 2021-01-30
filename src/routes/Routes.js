import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from 'constants/reset.css';
import AppThemeProvider from 'components/AppTheme';
import Navigation from 'components/Navigation';
import ProjectsPage from 'pages/ProjectsPage';
import MainContainer from 'components/common/MainContainer';

function Routes() {
   return (
      <Router>
         <GlobalStyle />
         <AppThemeProvider>
            <Navigation />
            <MainContainer>
               <Switch>
                  <Route exact path="/" component={ProjectsPage} />
               </Switch>
            </MainContainer>
         </AppThemeProvider>
      </Router>
   );
}

export default Routes;
