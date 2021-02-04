import {
   FETCH_PLANTS_START,
   FETCH_PLANTS_SUCCESS,
   PLANTS_ERROR,
   ADD_PLANT,
   CLEAR_PLANTS_STATE,
   REMOVE_PLANT,
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
