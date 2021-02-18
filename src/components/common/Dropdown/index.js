import React, { useRef, useCallback, useEffect } from 'react';
import { StyledUl, PillButton, StyledLi } from './style';
import PropTypes from 'prop-types';

export function Dropdown({ open, setOpen, labeledBy, id, children, ...props }) {
   const ref = useRef();
   const closeMenu = useCallback(
      (e) => {
         if (ref.current.contains(e.target)) {
            return;
         }
         setOpen(false);
         document.removeEventListener('mousedown', closeMenu);
      },
      [setOpen]
   );

   useEffect(() => {
      if (open) {
         document.addEventListener('mousedown', closeMenu);
      }
   }, [closeMenu, open]);
   return (
      <div style={{ position: 'relative' }}>
         <PillButton
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            id={id}
         >
            <span> {labeledBy}</span>
         </PillButton>
         <StyledUl $open={open} ref={ref} aria-labelledby={id}>
            {children}
         </StyledUl>
      </div>
   );
}

Dropdown.propTypes = {
   open: PropTypes.bool.isRequired,
   setOpen: PropTypes.func.isRequired,
   labeledBy: PropTypes.string.isRequired,
   id: PropTypes.string.isRequired,
   children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
   ]).isRequired,
};

export function DropdownItem({ ...props }) {
   return <StyledLi {...props}>{props.children}</StyledLi>;
}

DropdownItem.propTypes = {
   children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
   ]).isRequired,
};
