function todoReducer(state, action) {
   const { type, payload } = action;

   switch (type) {
      case 'ADD_TODO':
         return {
            ...state,
            todos: [payload, ...state.todos],
         };
      case 'TOGGLE_TODO':
         return {
            ...state,
            todos: state.todos.map((todo) =>
               todo.id === payload.id
                  ? { ...todo, completed: !todo.completed }
                  : todo
            ),
         };
      case 'REMOVE_TODO':
         return {
            ...state,
            todos: state.todos.filter((todo) => todo.id !== payload),
         };
      case 'START_FETCH':
         return {
            ...state,
            fetching: true,
         };
      case 'FETCH_SUCCESS':
         return {
            ...state,
            fetching: false,
            todos: payload,
         };
      case 'ERROR':
         return {
            ...state,
            error: payload,
         };
      default:
         return state;
   }
}

export default todoReducer;
