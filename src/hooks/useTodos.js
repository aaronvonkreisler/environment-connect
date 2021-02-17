import { createTodo, getAllTodos, completeTodo } from 'firebaseConfig/queries';
import { useReducer } from 'react';
import todoReducer from 'reducers/todoReducer';

const useTodos = (initialTodos) => {
   const [state, dispatch] = useReducer(todoReducer, initialTodos);
   const addTodo = async (todo) => {
      try {
         const item = await createTodo(todo);
         dispatch({
            type: 'ADD_TODO',
            payload: item,
         });
      } catch (err) {
         dispatch({
            type: 'ERROR',
            payload: err,
         });
      }
   };

   const toggleTodo = async (todo) => {
      try {
         await completeTodo(todo.id, !todo.completed);
         dispatch({
            type: 'TOGGLE_TODO',
            payload: todo,
         });
      } catch (err) {
         dispatch({
            type: 'ERROR',
            payload: err,
         });
      }
   };

   const removeTodo = (todo) => {
      dispatch({
         type: 'REMOVE_TODO',
         payload: todo.id,
      });
   };

   const fetchTodos = async (userId) => {
      try {
         dispatch({ type: 'START_FETCH' });
         const todos = await getAllTodos(userId);

         dispatch({
            type: 'FETCH_SUCCESS',
            payload: todos,
         });
      } catch (err) {
         dispatch({
            type: 'ERROR',
            payload: err,
         });
      }
   };

   return { state, addTodo, removeTodo, toggleTodo, fetchTodos };
};

export default useTodos;
