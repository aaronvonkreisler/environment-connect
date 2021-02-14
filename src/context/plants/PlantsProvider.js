import React, { useReducer, useContext } from 'react';
import PlantContext from 'context/plants/plantContext';
import plantReducer from 'context/plants/plantReducer';
import { mergeDocAndId } from 'utils/utils';
import db from 'firebaseConfig/db';
import AuthContext from 'context/auth/authContext';
import {
   PLANTS_ERROR,
   FETCH_PLANTS_SUCCESS,
   FETCH_PLANTS_START,
   REMOVE_PLANT,
   ADD_PLANT,
   GET_PLANT_BY_ID_START,
   GET_PLANT_BY_ID_SUCCESS,
   CLEAR_SELECTED_PLANT,
   UPDATE_PLANT,
} from 'context/types';

function PlantsProvider({ children }) {
   const { user } = useContext(AuthContext);
   const initialState = {
      fetching: false,
      plants: null, // will be an array
      error: null,
      selectedPlant: {},
      fetchingPlant: false,
   };
   const [state, dispatch] = useReducer(plantReducer, initialState);

   window.state = state;

   const fetchPlants = async () => {
      try {
         dispatch({
            type: FETCH_PLANTS_START,
         });
         const docRef = await db
            .collection('plants')
            .where('user', '==', user.uid)
            .get();
         const newPlants = docRef.docs.map(mergeDocAndId);
         dispatch({
            type: FETCH_PLANTS_SUCCESS,
            payload: newPlants,
         });
      } catch (err) {
         dispatch({
            type: PLANTS_ERROR,
            payload: err.message,
         });
      }
   };

   const addNewPlant = async (plant) => {
      try {
         const docRef = await db.collection('plants').add(plant);

         const doc = await docRef.get();
         const newPlant = mergeDocAndId(doc);
         dispatch({
            type: ADD_PLANT,
            payload: newPlant,
         });

         // create a notes document
         await db
            .collection('notes')
            .add({ plant: newPlant.id, user: user.uid });
      } catch (err) {
         dispatch({
            type: PLANTS_ERROR,
            payload: err.message,
         });
      }
   };

   const removePlant = async (id) => {
      try {
         dispatch({
            type: REMOVE_PLANT,
            payload: id,
         });

         await db.doc(`/plants/${id}`).delete();
      } catch (err) {
         dispatch({
            type: PLANTS_ERROR,
            payload: err.message,
         });
      }
   };

   const fetchPlantById = async (id) => {
      try {
         dispatch({ type: GET_PLANT_BY_ID_START });
         const docRef = await db.collection('plants').doc(id).get();
         const plant = mergeDocAndId(docRef);

         dispatch({
            type: GET_PLANT_BY_ID_SUCCESS,
            payload: plant,
         });
      } catch (err) {
         dispatch({
            type: PLANTS_ERROR,
            payload: err.message,
         });
      }
   };

   const updatePlant = async (id, updates) => {
      try {
         await db.doc(`/plants/${id}`).update(updates);
         const docRef = await db.doc(`/plants/${id}`).get();

         const updatedPlant = mergeDocAndId(docRef);
         dispatch({
            type: UPDATE_PLANT,
            payload: updatedPlant,
         });
      } catch (err) {
         dispatch({
            type: PLANTS_ERROR,
            payload: err.message,
         });
      }

      // console.log(updatedPlant);
   };

   const clearSlectedPlant = () => {
      dispatch({ type: CLEAR_SELECTED_PLANT });
   };

   const value = {
      fetching: state.fetching,
      plants: state.plants,
      selectedPlant: state.selectedPlant,
      fetchPlants,
      addNewPlant,
      removePlant,
      fetchPlantById,
      clearSlectedPlant,
      updatePlant,
   };
   return (
      <PlantContext.Provider value={value}>{children}</PlantContext.Provider>
   );
}

export default PlantsProvider;
