import React from 'react';
import './search.scss';
import { Open_Sans } from 'next/font/google';
import MainPanel from '../../components/mainpanel/MainPanel';
import SimpleBottomNavigation from '../../components/navbar/Navbar';
import SidePanel from '../../components/appbar/SidePanel'
import ButtonCreate from '../../components/buttoncreate/ButtonCreate'

const font = Open_Sans({ subsets: ['latin'] });

export default function SearchLayout({ children }) {
  return (
    <body className={font.className}>
        <MainPanel name="Cerca"/>
        <div id="central-panel">
          {children}
          <ButtonCreate id="fab-mobile"/>
        </div>
        {/*navbar Mobile in basso*/}
        <SimpleBottomNavigation />
        <SidePanel/>
    </body>
  );
}