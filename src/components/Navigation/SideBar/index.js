import React from 'react';
import { StyledSidebar } from './style';

function SideBar({ isOpen, children }) {
   return <StyledSidebar isOpen={isOpen}>{children}</StyledSidebar>;
}

SideBar.whyDidYouRender = true;

export default SideBar;
