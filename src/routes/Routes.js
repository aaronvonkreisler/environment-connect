import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from 'constants/reset.css';
import AppThemeProvider from 'components/AppTheme';
import Navigation from 'components/Navigation';
import MainContainer from 'components/common/MainContainer';
import ProjectsPage from 'pages/ProjectsPage';
import HomePage from 'pages/HomePage';
import PlantProvider from 'providers/PlantProvider';

function Routes() {
   return (
      <Router>
         <GlobalStyle />
         <AppThemeProvider>
            <Navigation />
            <MainContainer>
               <PlantProvider>
                  <Switch>
                     <Route exact path="/" component={HomePage} />
                     <Route exact path="/projects" component={ProjectsPage} />
                  </Switch>
               </PlantProvider>
            </MainContainer>
         </AppThemeProvider>
      </Router>
   );
}

export default Routes;
