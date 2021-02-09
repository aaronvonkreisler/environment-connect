import {
   FETCH_PLANTS_START,
   FETCH_PLANTS_SUCCESS,
   PLANTS_ERROR,
   ADD_PLANT,
   CLEAR_PLANTS_STATE,
   REMOVE_PLANT,
   GET_PLANT_BY_ID_START,
   GET_PLANT_BY_ID_SUCCESS,
   CLEAR_SELECTED_PLANT,
} from 'context/types';

function plantReducer(state, action) {
   const { type, payload } = action;

   switch (type) {
      case FETCH_PLANTS_START:
         return {
            ...state,
            fetching: true,
         };
      case FETCH_PLANTS_SUCCESS:
         return {
            ...state,
            plants: payload,
            fetching: false,
         };
      case GET_PLANT_BY_ID_START:
         return {
            ...state,
            fetchingPlant: true,
         };
      case GET_PLANT_BY_ID_SUCCESS:
         return {
            ...state,
            selectedPlant: payload,
            fetchingPlant: false,
         };
      case CLEAR_SELECTED_PLANT:
         return {
            ...state,
            selectedPlant: null,
         };
      case PLANTS_ERROR:
         return {
            ...state,
            error: payload,
            fetching: false,
         };
      case ADD_PLANT:
         return {
            ...state,
            plants: [payload, ...state.plants],
         };
      case REMOVE_PLANT:
         return {
            ...state,
            plants: state.plants.filter((plant) => plant.id !== payload),
         };
      case CLEAR_PLANTS_STATE:
         return {
            ...state,
            fetching: true,
            plants: null,
            error: null,
         };
      default:
         return state;
   }
}

export default plantReducer;
