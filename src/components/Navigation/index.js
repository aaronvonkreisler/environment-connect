import React, { Fragment, useState } from 'react';
import { GoProject } from 'react-icons/go';
import { MdSettings } from 'react-icons/md';
import { RiPlantFill } from 'react-icons/ri';

import AppBar from 'components/Navigation/AppBar';
import SideBar from 'components/Navigation/SideBar';
import SidebarItem from 'components/Navigation/SideBar/SidebarItem';
const sidebarItems = [
   {
      icon: <RiPlantFill />,
      label: 'Plants',
      path: '/plants',
   },
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
];

function Navigation({ modalRef }) {
   const [sidebarOpen, setSidebarOpen] = useState(false);
   return (
      <Fragment>
         <AppBar
            isOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            modalRef={modalRef}
         />
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
