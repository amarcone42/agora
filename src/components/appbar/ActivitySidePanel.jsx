'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import ContentActivity from '../contentpanel/ContentActivity';
import '../contentpanel/ContentHomepage';

const drawerWidth = 240;

export default function ActivitySidePanel() {

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        id='extra-panel'
        className='side-panel'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
      >
        <ContentActivity/>
       </Drawer>
      </Box>
  );
  }