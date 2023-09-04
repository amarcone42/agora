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
import Navbar from '../../components/navbar/Navbar';
import { useRouter } from 'next/navigation'
import { Link } from '@mui/material';

export default function BottomNavbar() {
  return (
    <Box className="stickToBottom" id="bottom-navbar">
     <Navbar/>
   </Box>
  );
}

