'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ChatIcon from '@mui/icons-material/Chat';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Rating from "@mui/material/Rating";
import { alpha, styled } from "@mui/material/styles";
import Link from 'next/link';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function ContentHomepage () {

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
              Contenuti
          </Typography>
      </DrawerHeader>
      <Divider />
      <FormGroup>
      <Typography className="title" > Filtri Home </Typography>
        <Stack direction="row" spacing="var(--spacing)" alignItems="center" className="custom-stack">
          <Typography className="Typography">Visualizza Momenti</Typography>
            <CustomSwitch defaultChecked/>
        </Stack>

        <Stack direction="row" spacing="var(--spacing)" alignItems="center" className="custom-stack">
          <Typography className="Typography">Visualizza Eventi</Typography>
            <CustomSwitch defaultChecked/>
        </Stack>

        <Stack direction="row" spacing="var(--spacing)" alignItems="center" className="custom-stack">
          <Typography className="Typography">Visualizza Notizie</Typography>
            <CustomSwitch defaultChecked/>
        </Stack>

        <Stack direction="row" spacing="var(--spacing)" alignItems="center" className="custom-stack">
          <Typography className="Typography">Visualizza contatti</Typography>
            <CustomSwitch defaultChecked/>
        </Stack>

        <Stack direction="row" spacing="var(--spacing)" alignItems="center" className="custom-stack">
          <Typography className="Typography">Contenuti espliciti</Typography>
            <CustomSwitch defaultChecked/>
        </Stack>

        <Stack direction="row" spacing="var(--spacing)" alignItems="center" className="custom-stack">
          <Typography className="Typography">Navigazione sicura</Typography>
            <CustomSwitch defaultChecked/>
        </Stack>
        
      </FormGroup>
    <Divider className='divider'/>
      <FormGroup>
      <Typography className="title" > Preferiti </Typography>
        <Stack direction="row" spacing="var(--spacing)" alignItems="center" className="custom-stack">
          <Typography className="Typography">Lucia Maggi</Typography>
          <Box className="customRating" spacing="var(--spacing)"><Rating defaultValue={1} max={1} /></Box>
        </Stack>

        <Stack direction="row" spacing="var(--spacing)" alignItems="center" className="custom-stack">
          <Typography className="Typography">CatARTico</Typography>
          <Box className="customRating" spacing="var(--spacing)"><Rating defaultValue={1} max={1} /></Box>
        </Stack>

        <Stack direction="row" spacing="var(--spacing)" alignItems="center" className="custom-stack">
          <Typography className="Typography">Catai</Typography>
          <Box className="customRating" spacing="var(--spacing)"><Rating defaultValue={1} max={1} /></Box>
        </Stack>

        <Stack direction="row" spacing="var(--spacing)" alignItems="center" className="custom-stack">
          <Typography className="Typography">In Movimento</Typography>
          <Box className="customRating" spacing="var(--spacing)"><Rating defaultValue={1} max={1} /></Box>
        </Stack>

        <Stack direction="row" spacing="var(--spacing)" alignItems="center" className="custom-stack">
          <Typography className="Typography">Fidays for Future</Typography>
          <Box className="customRating" spacing="var(--spacing)"><Rating defaultValue={1} max={1} /></Box>
        </Stack>

        <Stack direction="row" spacing="var(--spacing)" alignItems="center" className="custom-stack">
          <Typography className="Typography">LGBTQ+ Community</Typography>
          <Box className="customRating" spacing="var(--spacing)"><Rating defaultValue={1} max={1} /></Box>
        </Stack>
      </FormGroup>
    <Divider className='divider'/>
      <FormGroup>
      <Typography className="title" > Iscrizioni </Typography>
        <Stack direction="row" spacing="var(--spacing)" alignItems="center" className="custom-stack">
          <Typography className="Typography">Arte moderna</Typography>
          <Box className="customRating" spacing="var(--spacing)"><Rating defaultValue={0} max={1} /></Box>
        </Stack>

        <Stack direction="row" spacing="var(--spacing)" alignItems="center" className="custom-stack">
          <Typography className="Typography">Passione giardinaggio</Typography>
          <Box className="customRating" spacing="var(--spacing)"><Rating defaultValue={0} max={1} /></Box>
        </Stack>

        <Stack direction="row" spacing="var(--spacing)" alignItems="center" className="custom-stack">
          <Typography className="Typography">ExOPG</Typography>
          <Box className="customRating" spacing="var(--spacing)"><Rating defaultValue={0} max={1} /></Box>
        </Stack>

        <Stack direction="row" spacing="var(--spacing)" alignItems="center" className="custom-stack">
          <Typography className="Typography">CineCatai</Typography>
          <Box className="customRating" spacing="var(--spacing)"><Rating defaultValue={0} max={1} /></Box>
        </Stack>

        <Stack direction="row" spacing="var(--spacing)" alignItems="center" className="custom-stack">
          <Typography className="Typography">Passione Cinema</Typography>
          <Box className="customRating" spacing="var(--spacing)"><Rating defaultValue={0} max={1} /></Box>
        </Stack>

        <Stack direction="row" spacing="var(--spacing)" alignItems="center" className="custom-stack">
          <Typography className="Typography">Marco Bianchi</Typography>
          <Box className="customRating" spacing="var(--spacing)"><Rating defaultValue={0} max={1} /></Box>
        </Stack>
       </FormGroup>
      <Divider />

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