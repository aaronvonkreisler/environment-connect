import React, { Component } from 'react';
import { FiAlertTriangle } from 'react-icons/fi';
import {
   ErrorAlert,
   ErrorContainer,
   ErrorIcon,
   Message,
   ReloadButton,
} from './style';

class ErrorBoundary extends Component {
   constructor(props) {
      super(props);
      this.state = {
         hasError: false,
         errorInfo: '',
      };
   }

   static getDerivedStateFromError(error) {
      return { hasError: true };
   }

   componentDidCatch(error, errorInfo) {
      // eslint-disable-next-line no-console
      console.log({ error, errorInfo });

      this.setState({
         errorInfo,
      });
   }

   render() {
      const { hasError, errorInfo } = this.state;
      if (hasError) {
         return (
            <ErrorContainer>
               <ErrorIcon>
                  <FiAlertTriangle />
               </ErrorIcon>
               <Message>Oh no! Something bad happened...</Message>
               <Message $small>
                  {' '}
                  Please send a screenshot of the error message to
                  aaronvk.dev@gmail.com
               </Message>
               {errorInfo && (
                  <ErrorAlert role="alert">
                     {errorInfo.componentStack.toString()}
                  </ErrorAlert>
               )}
               <ReloadButton
                  onClick={() => {
                     window.location.reload();
                  }}
               >
                  <span>Reload this page</span>
               </ReloadButton>
            </ErrorContainer>
         );
      }

      return this.props.children;
   }
}

export default ErrorBoundary;
