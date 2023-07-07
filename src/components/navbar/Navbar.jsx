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

export function Navbar() {
  const [value, setValue] = React.useState(0);

  //applica lo stile all'icona che viene passata nella funzione
  const CustomIcon = ({ nameIcon: NameIcon }) => {
    return <NameIcon className="icon" />;
  };

  const router = useRouter()

  return (
    <BottomNavigation
      className="navbar"
      showLabels={true}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Home" icon={<CustomIcon nameIcon={HomeIcon} />} onClick={() => router.push('/home')} />
      <BottomNavigationAction label="Cerca" icon={<CustomIcon nameIcon={SearchIcon} />} onClick={() => router.push('/search')} />
      <BottomNavigationAction label="Attività" icon={<CustomIcon nameIcon={EventAvailableIcon} />} onClick={() => router.push('/activity')} />
      <BottomNavigationAction label="Chat" icon={<CustomIcon nameIcon={ChatIcon} />} onClick={() => router.push('/chat')} />
    </BottomNavigation>
  );
}

export default function SimpleBottomNavigation() {
  return(
    <div className="stickToBottom" id='bottom-navbar'>
      <Navbar />
    </div>
  );
}