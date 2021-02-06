import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { StyledMenu, StyledMenuItem } from './style';

function Menu({ open, onClose, ...props }) {
   const closeMenu = useCallback(() => {
      onClose();
      document.removeEventListener('mousedown', closeMenu);
   }, [onClose]);

   useEffect(() => {
      if (open) {
         document.addEventListener('mousedown', closeMenu);
      }
   }, [closeMenu, open]);
   return (
      <StyledMenu $open={open} role="menu" id={props.id}>
         <StyledMenuItem onClick={() => alert('hi')}>Log out</StyledMenuItem>
         <StyledMenuItem>Log out</StyledMenuItem>
         <StyledMenuItem>Log out</StyledMenuItem>
      </StyledMenu>
   );
}

Menu.propTypes = {
   open: PropTypes.bool.isRequired,
   onClose: PropTypes.func.isRequired,
};

export default Menu;
