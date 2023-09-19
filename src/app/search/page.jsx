'use client'
import SearchAppBar from '@/src/components/appbar/SearchAppBar';
import Post from '../../components/post/Post'
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Notifica from '@/src/components/notifica/Notifica';
import './search.scss';

export default function Search() {
  const [value, setValue] = React.useState(0);
    const [sezioneAttiva, setSezioneAttiva] = useState('Utenti'); // stato per tenere traccia della sezione attiva
  
    const mostraSezione = (sezione) => {
      setSezioneAttiva(sezione); // imposta la sezione attiva sulla base del pulsante cliccato
    };

  return (
    <main>
      {/* Mobile app bar */}
      <SearchAppBar>
      </SearchAppBar>
      <div id="content-panel" className='panel'>
      
      <div>
      <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className='bottom-grouppo'
      >
        
        <BottomNavigationAction label="Utenti"  className='botto' 
          style={{backgroundColor:value === 0 ? '#FFDE18' : 'transparent', color:'#333234' // Cambia il colore di sfondo quando il valore è 0, e il colore della label
          }} 
          onClick={() => mostraSezione('Utenti')}/>

        <BottomNavigationAction label="Gruppi" className='botto' style={{
            backgroundColor: value === 1 ? '#FFDE18' : 'transparent', color:'#333234'}}
            onClick={() => mostraSezione('Gruppi')}/>

        <BottomNavigationAction label="Eventi" className='botto' style={{
            backgroundColor:value === 2 ? '#FFDE18' : 'transparent', color:'#333234'}}
            onClick={() => mostraSezione('Eventi')}/>

      </BottomNavigation>
    </Box>

      {
        (sezioneAttiva === 'Utenti') && (
          <div>
            <Notifica type="Utente"/>
            <Notifica type="Utente"/>
          </div>
        )
      }

      {
        (sezioneAttiva === 'Gruppi') && (
          <div>
            <Notifica type="Gruppo"/>
            <Notifica type="Gruppo"/>
          </div>
        )
      }

      {
        sezioneAttiva === 'Eventi' && (
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
  