import React from 'react';
import { FiSearch } from 'react-icons/fi';

import { SearchBarContainer, Searchbar, Input, Icon } from './style';

function Search() {
   return (
      <SearchBarContainer>
         <div>
            <Icon>
               <FiSearch />
            </Icon>
            <Searchbar>
               <Input type="text" placeholder="Search..." />
            </Searchbar>
         </div>
      </SearchBarContainer>
   );
}

export default Search;
