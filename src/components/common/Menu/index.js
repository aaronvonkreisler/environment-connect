import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { StyledMenu, StyledMenuItem } from './style';

export function Menu({ open, onClose, ...props }) {
   const closeMenu = useCallback(
      (e) => {
         if (e.target.tagName !== 'LI') {
            onClose();
         }
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
      <StyledMenu $open={open} role="menu" id={props.id} {...props}>
         {props.children}
      </StyledMenu>
   );
}

Menu.propTypes = {
   open: PropTypes.bool.isRequired,
   onClose: PropTypes.func.isRequired,
};

export function MenuItem({ ...props }) {
   return <StyledMenuItem {...props}>{props.children}</StyledMenuItem>;
}
