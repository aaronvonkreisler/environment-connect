import React from 'react';
import PropTypes from 'prop-types';
import { NavItem, NavItemText } from './style';

function SidebarItem({ item, isOpen, ...rest }) {
   const { label, path, icon } = item;
   return (
      <NavItem isOpen={isOpen} to={path} {...rest} exact>
         {icon}
         <NavItemText isOpen={isOpen}>{label}</NavItemText>
      </NavItem>
   );
}

SidebarItem.propTypes = {
   item: PropTypes.object.isRequired,
   isOpen: PropTypes.bool,
};

export default SidebarItem;
