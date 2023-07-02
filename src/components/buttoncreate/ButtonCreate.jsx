'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './ButtonCreate.scss';

export default function ButtonCreate() {
  return (
    <>
     <Box sx={{ '& > :not(style)': { m: 1 } }}>
          <Fab id="fab-piccolo" color="--accent-color" aria-label="add">
              <AddIcon />
          </Fab>
      </Box>

      <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab id="fab-esteso" variant="extended" color="--accent-color" size="medium">
              <AddIcon id="Add" sx={{ mr: 2 }} />
              Crea
          </Fab>
        </Box>
      </>
  );
}