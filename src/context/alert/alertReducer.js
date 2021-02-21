function alertReducer(state, action) {
   const { type, payload } = action;

   switch (type) {
      case 'SET_ALERT':
         return {
            ...state,
            alerts: [...state, payload],
         };
      case 'REMOVE_ALERT':
         return state.filter((alert) => alert.id !== payload);
      default:
         return state;
   }
}

export default alertReducer;
