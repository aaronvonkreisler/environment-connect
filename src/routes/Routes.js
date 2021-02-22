import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from 'constants/reset.css';
import PrivateRoute from './PrivateRoute';
import AppThemeProvider from 'components/AppTheme';
import Navigation from 'components/Navigation';
import ProjectsPage from 'pages/ProjectsPage';
import HomePage from 'pages/HomePage';
import PlantsProvider from 'context/plants/PlantsProvider';
import LoginPage from 'pages/LoginPage';
import PlantDetailsPage from 'pages/PlantDetailsPage';
import AlertProvider from 'context/alert/AlertProvider';
import Alerts from 'components/Alerts';

function Routes() {
   return (
      <Router>
         <GlobalStyle />
         <AppThemeProvider>
            <AlertProvider>
               <Alerts />
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
            </AlertProvider>
         </AppThemeProvider>
      </Router>
   );
}

export default Routes;
