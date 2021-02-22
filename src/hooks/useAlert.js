import { useContext } from 'react';

import AlertContext from 'context/alert/alertContext';

const useAlert = () => {
   const { showAlert } = useContext(AlertContext);

   return showAlert;
};

export default useAlert;
