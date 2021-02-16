import React, { useState } from 'react';
import { TodoCard, TodoTitle } from './style';
import IconButton from 'components/common/IconButton';
import { FiSearch } from 'react-icons/fi';
import { BiPlus } from 'react-icons/bi';
import { MdMoreVert } from 'react-icons/md';
import TodoItem from './TodoItem';
function Todos() {
   const [toggleForm, setToggleForm] = useState(false);
   const [todos, setTodos] = useState([]);
   return (
      <TodoCard>
         <TodoTitle>
            <div>Todos</div>
            <div>
               <IconButton small grey onClick={() => console.log('hi')}>
                  <FiSearch />
               </IconButton>
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
         {!toggleForm && <TodoItem />}
         {toggleForm && <div>Form</div>}
      </TodoCard>
   );
}

export default Todos;
