import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { NavItem, NavItemText } from './style';

function SidebarItem({ item, isOpen }) {
   const { label, path, icon } = item;
   return (
      <NavLink to={path}>
         <NavItem isOpen={isOpen}>
            {icon}
            <NavItemText isOpen={isOpen}>{label}</NavItemText>
         </NavItem>
      </NavLink>
   );
}

SidebarItem.propTypes = {
   item: PropTypes.object.isRequired,
   isOpen: PropTypes.bool,
};

export default SidebarItem;
