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
import Avatar from '../../Avatar';
import IconButton from '../../IconButton';
import Button from '../../Button';
import { FlexRow } from '../../shared/style';
function AppBar({ setSidebarOpen, isOpen }) {
   return (
      <AppBarRoot>
         <MenuButtonContainer>
            <IconButton onClick={() => setSidebarOpen(!isOpen)}>
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
         <FlexRow>
            <div style={{ marginRight: '20px' }}>
               <Button
                  outline
                  text="Add new Item"
                  onClick={() => alert('hi')}
               />
            </div>
            <Avatar
               src="https://tweeter-dev.s3.us-east-2.amazonaws.com/dnrvvOQ8LGlJ2uEgqjiR4HAhp-1608075405666.JPG"
               alt=""
               shadow
               onClick={() => alert('Menu Goes here')}
            />
         </FlexRow>
      </AppBarRoot>
   );
}

export default AppBar;
