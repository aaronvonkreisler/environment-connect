import React, { Fragment, useState } from 'react';
import { GoProject } from 'react-icons/go';
import { MdSettings } from 'react-icons/md';
import AppBar from './AppBar';
import SideBar from './SideBar';
import SidebarItem from './SideBar/SidebarItem';
const sidebarItems = [
   {
      icon: <GoProject />,
      label: 'Projects',
      path: '/projects',
   },
   {
      icon: <MdSettings />,
      label: 'Settings',
      path: '/settings',
   },
   {
      icon: <GoProject />,
      label: 'Hello',
      path: '/hello',
   },
   {
      icon: <MdSettings />,
      label: 'Test',
      path: '/test',
   },
];

function Navigation() {
   const [sidebarOpen, setSidebarOpen] = useState(false);
   return (
      <Fragment>
         <AppBar isOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
         <SideBar isOpen={sidebarOpen}>
            {sidebarItems.map((item) => (
               <SidebarItem
                  item={item}
                  isOpen={sidebarOpen}
                  key={item.label}
                  onClick={() => setSidebarOpen(false)}
               />
            ))}
         </SideBar>
      </Fragment>
   );
}

export default Navigation;
