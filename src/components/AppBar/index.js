import React from 'react';
import { FiSearch, FiMenu } from 'react-icons/fi';
import {
   AppBarRoot,
   MenuButtonContainer,
   SearchBarContainer,
   Searchbar,
   Input,
   Icon,
} from './style';
import Avatar from '../Avatar';
import IconButton from '../IconButton';

function AppBar() {
   return (
      <AppBarRoot>
         <MenuButtonContainer>
            <IconButton onCLick={() => alert('HI')}>
               <FiMenu />
            </IconButton>
         </MenuButtonContainer>

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
         <Avatar
            src="https://tweeter-dev.s3.us-east-2.amazonaws.com/dnrvvOQ8LGlJ2uEgqjiR4HAhp-1608075405666.JPG"
            alt=""
            shadow
            onClick={() => alert('Menu Goes here')}
         />
      </AppBarRoot>
   );
}

export default AppBar;
