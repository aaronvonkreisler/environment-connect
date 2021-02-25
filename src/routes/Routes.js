import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from 'constants/reset.css';
import PrivateRoute from './PrivateRoute';
import AppThemeProvider from 'components/AppTheme';
import Navigation from 'components/Navigation';
import PlantsProvider from 'context/plants/PlantsProvider';
import AlertProvider from 'context/alert/AlertProvider';
import Alerts from 'components/Alerts';
import ErrorBoundary from 'components/ErrorBoundary';
import LoadingBackdrop from 'components/common/LoadingBackdrop';
import LoginPage from 'pages/LoginPage';
const HomePage = React.lazy(() => import('pages/HomePage'));
const PlantDetailsPage = React.lazy(() => import('pages/PlantDetailsPage'));

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
                     <ErrorBoundary>
                        <Navigation />
                     </ErrorBoundary>
                     <Suspense fallback={<LoadingBackdrop />}>
                        <ErrorBoundary>
                           <PrivateRoute
                              exact
                              path="/plants"
                              component={HomePage}
                           />
                        </ErrorBoundary>
                     </Suspense>
                     <Suspense fallback={<LoadingBackdrop />}>
                        <ErrorBoundary>
                           <PrivateRoute
                              exact
                              path="/plants/:id"
                              component={PlantDetailsPage}
                           />
                        </ErrorBoundary>
                     </Suspense>
                  </PlantsProvider>
               </Switch>
            </AlertProvider>
         </AppThemeProvider>
      </Router>
   );
}

export default Routes;
