import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { SearchBarContainer, Searchbar, Input, Icon } from './style';
import { Menu, MenuItem } from 'components/common/Menu';

function Search() {
   const [menuOpen, setMenuOpen] = useState(false);
   const handleMenuOpen = () => {
      setMenuOpen(true);
   };

   const handleMenuClose = () => {
      setMenuOpen(false);
   };
   return (
      <SearchBarContainer>
         <div>
            <Icon>
               <FiSearch />
            </Icon>
            <Searchbar>
               <Input
                  type="text"
                  placeholder="Search..."
                  onFocus={handleMenuOpen}
               />
               <Menu
                  open={menuOpen}
                  id="search-results"
                  onClose={handleMenuClose}
                  style={{
                     top: '101%',
                     left: '0',
                     width: '100%',
                     minHeight: '100px',
                  }}
               >
                  <MenuItem onClick={() => console.log('hi')}>Hi</MenuItem>
               </Menu>
            </Searchbar>
         </div>
      </SearchBarContainer>
   );
}

export default Search;
