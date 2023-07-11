'use client'
import * as React from 'react';

import Typography from '@mui/material/Typography';

import SettingsIcon from '@mui/icons-material/Settings';

import '../navbar/navbar.scss';

import IconButton from '@mui/material/IconButton';

export default function ImpostazioniIcon() {
    return (
      
        <IconButton sx={{ marginTop: '180px', paddingRight: '74px' }} className='rowBoxIcon'>
          <SettingsIcon sx={{ marginLeft: '0px' }} className='sicon' />
          <Typography id='font'>Impostazioni</Typography>
        </IconButton>
      
    );
  }