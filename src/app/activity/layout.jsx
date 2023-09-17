import React from 'react';
import './activity.scss';
import { Open_Sans } from 'next/font/google';
import MainPanel from '../../components/mainpanel/MainPanel';
import BottomNavbar from '../../components/navbar/BottomNavbar';
import ActivitySidePanel from '../../components/appbar/ActivitySidePanel'
import ButtonCreate from '../../components/buttoncreate/ButtonCreate'

const font = Open_Sans({ subsets: ['latin'] });

export default function ActivityLayout({ children }) {
  return (
    <body className={font.className}>
        <MainPanel name="Activity"/>
        <div id="central-panel">
          {children}
          <ButtonCreate id="fab-mobile"/>
        </div>
        {/*navbar Mobile in basso*/}
        <BottomNavbar className='bottom-navbar'/>
        <ActivitySidePanel/>
    </body>
  );
}