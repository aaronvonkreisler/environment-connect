import React, { useRef, Fragment, useState, useContext } from 'react';
import { FiSearch, FiMenu } from 'react-icons/fi';
import {
   AppBarRoot,
   MenuButtonContainer,
   SearchBarContainer,
   Searchbar,
   Input,
   Icon,
} from './style';
import Avatar from 'components/common/Avatar';
import IconButton from 'components/common/IconButton';
import Button from 'components/common/Button';
import NewItemForm from 'components/NewItemForm';
import AuthContext from 'context/auth/authContext';
import { FlexRow } from 'components/common/StyledUtils';
import { Menu, MenuItem } from 'components/common/Menu';
import { requestLogout } from 'firebaseConfig/db';

function AppBar({ setSidebarOpen, isOpen }) {
   const [menuOpen, setMenuOpen] = useState(false);
   const { user, loading } = useContext(AuthContext);
   const modalRef = useRef();

   const handleModalOpen = () => {
      modalRef.current.openModal();
   };

   const handleMenuClose = () => {
      setMenuOpen(false);
   };

   return (
      <Fragment>
         <NewItemForm modalRef={modalRef} />

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
                     onClick={handleModalOpen}
                  />
               </div>
               <Avatar
                  src={!loading && user ? user.photoURL : null}
                  alt=""
                  shadow
                  onClick={() => setMenuOpen(!menuOpen)}
                  aria-controls="user-menu"
                  aria-haspopup="true"
               />
               <Menu open={menuOpen} id="user-menu" onClose={handleMenuClose}>
                  <MenuItem onClick={requestLogout}>Logout</MenuItem>
               </Menu>
            </FlexRow>
         </AppBarRoot>
      </Fragment>
   );
}
//"https://tweeter-dev.s3.us-east-2.amazonaws.com/dnrvvOQ8LGlJ2uEgqjiR4HAhp-1608075405666.JPG"
export default AppBar;
