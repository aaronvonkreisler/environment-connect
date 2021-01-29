import React from 'react';
import { FiSearch } from 'react-icons/fi';
import {
   AppBarRoot,
   LogoItems,
   NavItems,
   SearchBarContainer,
   Searchbar,
   Input,
   Icon,
   LogoImage,
} from './style';
import Avatar from '../Avatar';
import logoImage from '../../images/logoCropped.png';

function AppBar() {
   return (
      <AppBarRoot>
         <LogoItems>
            <LogoImage>
               <img src={logoImage} alt="Compost Connect" />
            </LogoImage>
         </LogoItems>

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
