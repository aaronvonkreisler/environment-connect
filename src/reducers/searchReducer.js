function searchReducer(state, action) {
   const { type, payload } = action;
   switch (type) {
      case 'START_FETCH':
         return {
            ...state,
            fetching: true,
            error: null,
         };
      case 'FETCH_SUCCESS':
         return {
            ...state,
            fetching: false,
            results: payload,
         };
      case 'OPEN_MENU':
         return {
            ...state,
            menuOpen: true,
         };
      case 'CLOSE_MENU':
         return {
            ...state,
            menuOpen: false,
         };
      case 'ERROR':
         return {
            ...state,
            fetching: false,
            error: payload,
            results: [],
         };
      default:
         return state;
   }
}

export default searchReducer;
