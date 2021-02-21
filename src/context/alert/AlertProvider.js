import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';

const initialState = [];

function AlertProvider({ children }) {
   const [state, dispatch] = useReducer(alertReducer, initialState);

   const showAlert = (msg, type, timeout = 3000) => {
      const id = uuid();
      dispatch({
         type: 'SET_ALERT',
         payload: { msg, type, id },
      });

      setTimeout(() => {
         dispatch({ type: 'REMOVE_ALERT', payload: id });
      }, timeout);
   };

   const value = {
      alerts: state,
      showAlert,
   };
   return (
      <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
   );
}

export default AlertProvider;
