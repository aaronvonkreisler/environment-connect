import { searchByDesiredSun, searchPlantByLayer } from 'firebaseConfig/queries';

export const searchByLayer = async (layer, id, dispatch) => {
   try {
      dispatch({ type: 'START_FETCH' });
      const results = await searchPlantByLayer(layer, id);
      dispatch({
         type: 'FETCH_SUCCESS',
         payload: results,
      });
   } catch (err) {
      dispatch({
         type: 'ERROR',
         payload: err,
      });
   }
};

export const searchBySun = async (desiredSun, id, dispatch) => {
   try {
      dispatch({ type: 'START_FETCH' });
      const results = await searchByDesiredSun(desiredSun, id);
      dispatch({
         type: 'FETCH_SUCCESS',
         payload: results,
      });
   } catch (err) {
      dispatch({
         type: 'ERROR',
         payload: err,
      });
   }
};
