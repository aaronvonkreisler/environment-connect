import React, { useEffect, useState, createContext } from 'react';
import db from 'db';
import { mergeDocAndId } from 'utils/utils';

export const PlantContext = createContext(null);

function PlantProvider({ children }) {
   const [plants, setPlants] = useState(null);

   const fetchPlants = async () => {
      const docRef = await db.collection('plants').get();

      const newPlants = docRef.docs.map(mergeDocAndId);
      setPlants(newPlants);
   };

   useEffect(() => {
      fetchPlants();
   }, []);
   return (
      <PlantContext.Provider value={plants}>{children}</PlantContext.Provider>
   );
}

export default PlantProvider;
