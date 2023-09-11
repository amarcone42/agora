'use client'
import React from 'react';

import { Open_Sans } from 'next/font/google';
import MainPanel from '../../components/mainpanel/MainPanel';
import SimpleBottomNavigation from '../../components/navbar/Navbar';
import SidePanel from '../../components/appbar/SidePanel'
import ButtonCreate from '../../components/buttoncreate/ButtonCreate'
import ChatIcon from '@mui/icons-material/Chat';
import Fab from '@mui/material/Fab';
import SearchIcon from '@mui/icons-material/Search';
import Searchbar from '../../components/searchbar/Searchbar'



const font = Open_Sans({ subsets: ['latin'] });

export default function SearchLayout({ children }) {
  return (
    <body className={font.className}>
     
        <MainPanel name="Chat">
        
        </MainPanel>
       
        <div id="central-panel">
        
          {children}
          <Fab className="fab" color="primary" aria-label="chat">
           <ChatIcon />
          </Fab>
          
        </div>
        {/*navbar Mobile in basso*/}
        <SimpleBottomNavigation className="bottomNavbar" id="bottomNavbar"/>
        <SidePanel/>
    </body>
  );
}