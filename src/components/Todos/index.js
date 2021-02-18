import React, { useEffect, useState } from 'react';
import { TodoCard, TodoTitle } from './style';
import IconButton from 'components/common/IconButton';
import { BiPlus } from 'react-icons/bi';
import { MdMoreVert } from 'react-icons/md';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import TodoSkeleton from './TodoSkeleton';
import useTodos from 'hooks/useTodos';
import useAuth from 'hooks/useAuth';

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

   useEffect(() => {
      fetchTodos(id);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <TodoCard>
         <TodoTitle>
            <div>{toggleForm ? 'Add task' : 'My tasks'}</div>
            <div>
               <IconButton
                  small
                  grey
                  onClick={() => setToggleForm(!toggleForm)}
               >
                  <BiPlus />
               </IconButton>
               <IconButton small grey onClick={() => console.log('hi')}>
                  <MdMoreVert />
               </IconButton>
            </div>
         </TodoTitle>
         {fetching && <TodoSkeleton />}
         {toggleForm && !fetching && (
            <TodoForm
               addTodo={addTodo}
               setToggleForm={setToggleForm}
               userId={id}
            />
         )}
         {!toggleForm &&
            todos.map((todo) => (
               <TodoItem item={todo} toggleTodo={toggleTodo} key={todo.id} />
            ))}
      </TodoCard>
   );
}

export default Todos;
