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

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  //applica lo stile all'icona che viene passata nella funzione
  const CustomIcon = ({ nameIcon: NameIcon }) => {
    return <NameIcon className="icon" />;
  };

  return (
    <Box className="stickToBottom">
      <BottomNavigation id="topolino"
        className="navbar"
        showLabels={true}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<CustomIcon nameIcon={HomeIcon} />} />
        <BottomNavigationAction label="Cerca" icon={<CustomIcon nameIcon={SearchIcon} />} />
        <BottomNavigationAction label="Attività" icon={<CustomIcon nameIcon={EventAvailableIcon} />} />
        <BottomNavigationAction label="Chat" icon={<CustomIcon nameIcon={ChatIcon} />} />
      </BottomNavigation>
    </Box>
  );
}
