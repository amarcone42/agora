'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ChatIcon from '@mui/icons-material/Chat';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  //add style to icons, input of function is the name of the icon
  const CustomIcon = ({NameIcon}) => {
    return (
      <span>
        <NameIcon style={{ color: '#333234', fontSize: '24px' }} />
      </span>
    );
  };

  return (
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      
        //change the style of selected icons, labels, and ripple touch
        sx={{
    "& .Mui-selected, .Mui-selected > svg": {
      fontWeight: 'bold',
      color: "#333234",     
    },
    "& .MuiTouchRipple-child": {
      backgroundColor: "black",
    },
      "& .Mui-selected .MuiSvgIcon-root": {
        backgroundColor: '#FFDE18',
        padding: '6px 12px',
        borderRadius: '25%',
      }
  
}}
>
        <BottomNavigationAction  label="Home" icon={<CustomIcon  NameIcon={HomeIcon} selected={value === 1}/>} />
        <BottomNavigationAction  label="Cerca" icon={<CustomIcon NameIcon={SearchIcon} />} />
        <BottomNavigationAction  label="Attività" icon={<CustomIcon NameIcon={EventAvailableIcon} />} />
        <BottomNavigationAction  label="Chat" icon={<CustomIcon NameIcon={ChatIcon} />} />
      </BottomNavigation>
    </Box>
  );
}
