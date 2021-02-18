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
   fetching: false,
   error: null,
};
function Todos() {
   const { id } = useAuth();
   const [toggleForm, setToggleForm] = useState(false);
   const { state, toggleTodo, fetchTodos, addTodo } = useTodos(initialState);
   const { todos, fetching } = state;
   const [filteredTodos, setFilteredTodos] = useState(todos);
   const { items, requestSortBy } = useSortableData(filteredTodos);

   useEffect(() => {
      fetchTodos(id);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   // filter through the todos to set State to only show ones that arent completed
   useEffect(() => {
      if (todos) {
         const withoutCompleted = todos.filter(
            (todo) => todo.completed === false
         );
         setFilteredTodos(withoutCompleted);
      }
   }, [todos]);

   const showCompleted = () => {
      setFilteredTodos(todos);
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
