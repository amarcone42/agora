'use client'
import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ChatIcon from '@mui/icons-material/Chat';
import './navbar.scss';
import { useRouter } from 'next/navigation'
import { Link } from '@mui/material';

export default function Navbar({label}) {
  const [value, setValue] = React.useState(0);

  //applica lo stile all'icona che viene passata nella funzione
  const CustomIcon = ({ nameIcon: NameIcon }) => {
    return <NameIcon className="icon" />;
  };
  
  const router = useRouter()
  const showLabels = label ? false : true;

  return (
    
    <BottomNavigation id="bottom-navbar"
      className="navbar"
      showLabels={showLabels}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction className="Button" label="Home" icon={<CustomIcon nameIcon={HomeIcon} />} onClick={() => router.push('/home')} />
      <BottomNavigationAction className="Button" label="Cerca" icon={<CustomIcon nameIcon={SearchIcon} />} onClick={() => router.push('/search')} />
      <BottomNavigationAction className="Button" label="Attività" icon={<CustomIcon nameIcon={EventAvailableIcon} />} onClick={() => router.push('/activity')} />
      <BottomNavigationAction className="Button" label="Chat" icon={<CustomIcon nameIcon={ChatIcon} />} onClick={() => router.push('/chat')} />
    </BottomNavigation>
   
  );
}

