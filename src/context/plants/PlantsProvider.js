import React, { useReducer } from 'react';
import PlantContext from 'context/plants/plantContext';
import plantReducer from 'context/plants/plantReducer';
import { mergeDocAndId } from 'utils/utils';
import db from 'db';

import {
   FETCH_PLANTS_ERROR,
   FETCH_PLANTS_SUCCESS,
   FETCH_PLANTS_START,
   CLEAR_PLANTS_STATE,
   ADD_PLANT,
} from 'context/types';

function PlantsProvider({ children }) {
   const initialState = {
      fetching: true,
      plants: null, // will be an array
      error: null,
   };
   const [state, dispatch] = useReducer(plantReducer, initialState);

   window.state = state;

   const fetchPlants = async () => {
      try {
         dispatch({
            type: FETCH_PLANTS_START,
         });
         const docRef = await db.collection('plants').get();
         const newPlants = docRef.docs.map(mergeDocAndId);
         dispatch({
            type: FETCH_PLANTS_SUCCESS,
            payload: newPlants,
         });
      } catch (err) {
         dispatch({
            type: FETCH_PLANTS_ERROR,
            payload: err.message,
         });
      }
   };

   const addNewPlant = async (plant) => {
      const docRef = await db.collection('plants').add(plant);
      const doc = await docRef.get();
      const newPlant = mergeDocAndId(doc);
      dispatch({
         type: ADD_PLANT,
         payload: newPlant,
      });
   };

   const value = {
      fetching: state.fetching,
      plants: state.plants,
      fetchPlants,
      addNewPlant,
   };
   return (
      <PlantContext.Provider value={value}>{children}</PlantContext.Provider>
   );
}

export default PlantsProvider;
