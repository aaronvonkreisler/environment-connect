import React, { Fragment, useState } from 'react';
import { GoProject } from 'react-icons/go';

import AppBar from './AppBar';
import SideBar from './SideBar';
import SidebarItem from './SideBar/SidebarItem';
const sidebarItems = [
   {
      icon: <GoProject />,
      label: 'Projects',
      path: '/projects',
   },
];

function Navigation() {
   const [sidebarOpen, setSidebarOpen] = useState(false);
   return (
      <Fragment>
         <AppBar isOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
         <SideBar isOpen={sidebarOpen}>
            {sidebarItems.map((item) => (
               <SidebarItem item={item} isOpen={sidebarOpen} key={item.label} />
            ))}
         </SideBar>
      </Fragment>
   );
}

export default Navigation;
