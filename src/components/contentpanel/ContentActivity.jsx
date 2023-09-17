'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Rating from "@mui/material/Rating";
import { alpha, styled } from "@mui/material/styles";
import Link from 'next/link';
import BasicDateRangeCalendar from '../calendar/Calendar'; 

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function ContentActivity () {

    const CustomSwitch = styled(Switch)(({ theme }) => ({
        '& .MuiSwitch-switchBase.Mui-checked': {
          color: "#FFDE18",
          '&:hover': {
            backgroundColor: alpha("#FFDE18", theme.palette.action.hoverOpacity),
          },
        },
        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
          backgroundColor: "#FFDE18",
        },
      }));

  return (
    <Box id='homepageContent'>
    <DrawerHeader>
        <Typography variant="h6" component="div" fontWeight={'bold'} sx={{ flexGrow: 1 }} className='panel-name'>
              Calendario
          </Typography>
      </DrawerHeader>
      <Divider />
      <FormGroup>

      {/* Calendario */}
     <BasicDateRangeCalendar/>
        
      </FormGroup>
    
        <Stack   className="footer">
        <Link href="https://www.example.com" className="link-text" target="_blank">
          <Typography className="TypographyFooter">Termini di servizio</Typography>
        </Link>
        <Link href="https://www.example.com" className="link-text" target="_blank">
          <Typography className="TypographyFooter">Informative sulla privacy</Typography>
        </Link>
        <Link href="https://www.example.com" className="link-text" target="_blank">
          <Typography className="TypographyFooter">Norme sui cookies</Typography>
        </Link>
        <Link href="https://www.example.com" className="link-text" target="_blank">
          <Typography className="TypographyFooter">Annunci</Typography>
        </Link>
        <Link href="https://www.example.com" className="link-text" target="_blank">
          <Typography className="TypographyFooter">Chi siamo</Typography>
        </Link>
        <Link href="https://www.example.com" className="link-text" target="_blank">
          <Typography className="TypographyFooter">Nome sistema, inc. ® 2023</Typography>
        </Link>
        </Stack>
    </Box>
  )
}