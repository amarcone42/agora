import React from 'react';
import './home.scss';
import { Open_Sans } from 'next/font/google';
import MainPanel from '../../components/mainpanel/MainPanel';
import BottomNavbar from '../../components/navbar/BottomNavbar';
import SidePanel from '../../components/appbar/SidePanel'
import ButtonCreate from '../../components/buttoncreate/ButtonCreate'

const font = Open_Sans({ subsets: ['latin'] });

export default function HomeLayout({ children }) {
  return (
    <body className={font.className}>
        <MainPanel name="Home"/>
        <div id="central-panel">
          {children}
          <ButtonCreate id="fab-mobile"/>
        </div>
        {/*navbar Mobile in basso*/}
        <BottomNavbar className='bottom-navbar'/>
        <SidePanel/>
    </body>
  );
}