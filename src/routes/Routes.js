import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from 'constants/reset.css';
import PrivateRoute from './PrivateRoute';
import AppThemeProvider from 'components/AppTheme';
import Navigation from 'components/Navigation';
import MainContainer from 'components/common/MainContainer';
import ProjectsPage from 'pages/ProjectsPage';
import HomePage from 'pages/HomePage';
import PlantsProvider from 'context/plants/PlantsProvider';
import LoginPage from 'pages/LoginPage';
import PlantDetailsPage from 'pages/PlantDetailsPage';

function Routes() {
   return (
      <Router>
         <GlobalStyle />
         <AppThemeProvider>
            <Switch>
               <Route exact path="/" component={LoginPage} />
               <PlantsProvider>
                  <Navigation />

                  <PrivateRoute exact path="/plants" component={HomePage} />
                  <PrivateRoute
                     exact
                     path="/projects"
                     component={ProjectsPage}
                  />

                  <PrivateRoute
                     exact
                     path="/plants/:id"
                     component={PlantDetailsPage}
                  />
               </PlantsProvider>
            </Switch>
         </AppThemeProvider>
      </Router>
   );
}

export default Routes;
