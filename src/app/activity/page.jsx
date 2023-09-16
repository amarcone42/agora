'use client'
import './activity.scss';
import Activityappbar from '@/src/components/appbar/Activityappbar';
import Post from '../../components/post/Post'
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BasicDateRangeCalendar from '@/src/components/calendar/Calendar';
import { useMediaQuery } from '@mui/material';
import Notifica from '@/src/components/notifica/Notifica';


export default function Activity() {
  const [value, setValue] = React.useState(0);
    const [sezioneAttiva, setSezioneAttiva] = useState('Notifiche'); // stato per tenere traccia della sezione attiva
  
    const mostraSezione = (sezione) => {
      setSezioneAttiva(sezione); // imposta la sezione attiva sulla base del pulsante cliccato
    };

    const isLargeScreen = useMediaQuery('(min-width:1200px)');
  return (
    <main>
      {/* Mobile app bar */}
      <Activityappbar>
      </Activityappbar>
      <div id="content-panel" className='panel'>
      
      <div>
      <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className='bottom-group'
      >
        
        <BottomNavigationAction label="Notifiche"  className='botto' 
          style={{backgroundColor:value === 0 ? '#FFDE18' : 'transparent', color:'#333234' // Cambia il colore di sfondo quando il valore è 0, e il colore della label
          }} 
          onClick={() => mostraSezione('Notifiche')}/>

        <BottomNavigationAction label="Calendario" className='botto' style={{
            backgroundColor: value === 1 ? '#FFDE18' : 'transparent', color:'#333234'}}
            onClick={() => mostraSezione('Calendario')}/>

        <BottomNavigationAction label="Salvati" className='botto' style={{
            backgroundColor:value === 2 ? '#FFDE18' : 'transparent', color:'#333234'}}
            onClick={() => mostraSezione('Salvati')}/>

      </BottomNavigation>
    </Box>

      {
        (sezioneAttiva === 'Notifiche'|| (sezioneAttiva === 'Calendario' && isLargeScreen)) && (
          <div>
            <Notifica type="Like"/>
            <Notifica type="Commento"/>
          </div>
        )
      }

      {
        (sezioneAttiva === 'Calendario' && !isLargeScreen) && (
          <div className="Cal">
            <BasicDateRangeCalendar/>
          </div>
        )
      }

      {
        sezioneAttiva === 'Salvati' && (
          <div>
            <Post type="Event"/>
            <Post type="Event"/>
          </div>
        )
      }
    </div>
      </div>
    </main>
  )
}
