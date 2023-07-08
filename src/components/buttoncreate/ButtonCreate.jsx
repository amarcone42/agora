'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './buttoncreate.scss';
import { Typography } from '@mui/material';

export default function ButtonCreate({label}) {
  var variant = ''
  var id = 'fab-mobile'
  if (label) {
    variant = 'extended';
    id = '';
  }
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab id={id} className="fab" variant={variant} aria-label="add">
          <AddIcon className="Add"/>
          <Typography className='label'>{label}</Typography>
      </Fab>
    </Box>
  );
}