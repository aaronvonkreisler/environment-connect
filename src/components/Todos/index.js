import React, { useState } from 'react';
import { TodoCard, TodoTitle } from './style';
import IconButton from 'components/common/IconButton';
import { FiSearch } from 'react-icons/fi';
import { BiPlus } from 'react-icons/bi';
import { MdMoreVert } from 'react-icons/md';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const placeHolder = [
   {
      title: 'Go to the store',
      complete: false,
      dueDate: '2021-02-17',
      priority: 'high',
      details: '',
   },
   {
      title: 'Walk the dog',
      complete: true,
      dueDate: '2021-02-17',
      priority: 'low',
      details: '',
   },
   {
      title: 'Buy groceries',
      complete: false,
      dueDate: '2021-02-17',
      priority: 'medium',
      details: 'I need to buy groceries so that I can survive',
   },
];

function Todos() {
   const [toggleForm, setToggleForm] = useState(false);
   const [todos, setTodos] = useState(placeHolder);
   return (
      <TodoCard>
         <TodoTitle>
            <div>{toggleForm ? 'Add todo' : "Todo's"}</div>
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
         {toggleForm && <TodoForm />}
         {!toggleForm && todos.map((todo) => <TodoItem item={todo} />)}
      </TodoCard>
   );
}

export default Todos;
