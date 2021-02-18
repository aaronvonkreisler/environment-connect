import React, { useState } from 'react';
import { BiPlus } from 'react-icons/bi';
import { MdMoreVert } from 'react-icons/md';
import { TodoTitle } from './style';
import { Menu, MenuItem } from 'components/common/Menu';
import IconButton from 'components/common/IconButton';

function TodoHeader({ toggleForm, setToggleForm, requestSortBy }) {
   const [menuOpen, setMenuOpen] = useState(false);

   return (
      <>
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
               <IconButton
                  small
                  grey
                  onClick={() => setMenuOpen(true)}
                  aria-haspopup="true"
                  aria-controls="task-options"
               >
                  <MdMoreVert />
               </IconButton>
               <Menu
                  open={menuOpen}
                  id="task-options"
                  onClose={() => setMenuOpen(false)}
                  style={{ right: 0 }}
               >
                  <MenuItem onClick={() => requestSortBy('dueDate')}>
                     Sort by due date
                  </MenuItem>
                  <MenuItem onClick={() => requestSortBy('priority')}>
                     Sort by priority
                  </MenuItem>
               </Menu>
            </div>
         </TodoTitle>
      </>
   );
}

export default TodoHeader;
