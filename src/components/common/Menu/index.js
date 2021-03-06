import React, { useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { StyledMenu, StyledMenuItem } from './style';

export function Menu({ open, onClose, ...props }) {
   const menuRef = useRef();
   const closeMenu = useCallback(
      (e) => {
         if (menuRef.current && menuRef.current.contains(e.target)) {
            return;
         }
         onClose();
         document.removeEventListener('mousedown', closeMenu);
      },
      [onClose]
   );

   useEffect(() => {
      if (open) {
         document.addEventListener('mousedown', closeMenu);
      }
   }, [closeMenu, open]);
   return (
      <StyledMenu
         $open={open}
         role="menu"
         id={props.id}
         {...props}
         ref={menuRef}
      >
         {props.children}
      </StyledMenu>
   );
}

Menu.propTypes = {
   open: PropTypes.bool.isRequired,
   onClose: PropTypes.func.isRequired,
};

export function MenuItem({ ...props }) {
   return (
      <StyledMenuItem {...props} role="menu-item">
         {props.children}
      </StyledMenuItem>
   );
}
