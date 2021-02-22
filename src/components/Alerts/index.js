import React, { useContext } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { MdErrorOutline, MdInfoOutline } from 'react-icons/md';

import AlertContext from 'context/alert/alertContext';
import { AlertRoot, AlertIcon, AlertMessage } from './style';

function Alerts() {
   const { alerts } = useContext(AlertContext);

   const renderAlertIcon = (type) => {
      switch (type) {
         case 'success':
            return <FiCheckCircle />;
         case 'error':
            return <MdErrorOutline />;
         case 'info':
            return <MdInfoOutline />;
         default:
            return <MdInfoOutline />;
      }
   };
   return (
      alerts.length > 0 &&
      alerts.map((alert) => (
         <AlertRoot key={alert.id} $type={alert.type}>
            <AlertIcon>{renderAlertIcon(alert.type)}</AlertIcon>
            <AlertMessage>{alert.msg}</AlertMessage>
         </AlertRoot>
      ))
   );
}

export default Alerts;
