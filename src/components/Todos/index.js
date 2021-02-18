import React, { useEffect, useState } from 'react';
import { TodoCard } from './style';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import TodoSkeleton from './TodoSkeleton';
import TodoHeader from './TodoHeader';
import useTodos from 'hooks/useTodos';
import useAuth from 'hooks/useAuth';
import useSortableData from 'hooks/useSortableData';

const initialState = {
   todos: [],
   incompleteTodos: [],
   fetching: false,
   error: null,
};
function Todos() {
   const { id } = useAuth();
   const [toggleForm, setToggleForm] = useState(false);
   const { state, toggleTodo, fetchTodos, addTodo } = useTodos(initialState);
   const { todos, fetching, incompleteTodos } = state;
   const [sortableData, setSortableData] = useState([]);
   const [displayComplete, setDisplayComplete] = useState(false);
   const { items, requestSortBy } = useSortableData(sortableData);

   useEffect(() => {
      fetchTodos(id);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   useEffect(() => {
      if (incompleteTodos) {
         setSortableData(incompleteTodos);
      }
   }, [incompleteTodos]);

   const showCompleted = () => {
      if (displayComplete) {
         setSortableData(incompleteTodos);
         setDisplayComplete(false);
      } else {
         setSortableData(todos);
         setDisplayComplete(true);
      }
   };

   return (
      <TodoCard>
         <TodoHeader
            toggleForm={toggleForm}
            setToggleForm={setToggleForm}
            requestSortBy={requestSortBy}
            showCompleted={showCompleted}
         />
         {fetching && <TodoSkeleton />}
         {toggleForm && (
            <TodoForm
               addTodo={addTodo}
               setToggleForm={setToggleForm}
               userId={id}
            />
         )}
         {!toggleForm &&
            !fetching &&
            items.map((todo) => (
               <TodoItem item={todo} toggleTodo={toggleTodo} key={todo.id} />
            ))}
      </TodoCard>
   );
}

export default Todos;
