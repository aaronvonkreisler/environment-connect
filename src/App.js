import React, { Fragment, useEffect } from 'react';
import Routes from 'routes/Routes';
import db from 'db';
import { mergeDocAndId } from './utils/utils';
function App() {
   const fetchDocs = async () => {
      const docRef = await db.collection('plants').get();

      const test = docRef.docs.map(mergeDocAndId);
      console.log(test);
   };

   useEffect(() => {
      fetchDocs();
   }, []);
   return (
      <Fragment>
         <Routes />
      </Fragment>
   );
}

export default App;
