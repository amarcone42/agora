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
import '../temporarydrawer/temporarydrawer.scss';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function SidePanel() {

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
        <DrawerHeader>
        <Typography variant="h5" component="div" fontWeight={'bold'} sx={{ flexGrow: 1 }} className='panel-name'>
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
          <Box className="customRating" spacing="var(--spacing)"><Rating defaultValue={2} max={1} /></Box>
        </Stack>

        <Stack direction="row" spacing="var(--spacing)" alignItems="center" className="custom-stack">
          <Typography className="Typography">CatARTico</Typography>
          <Box className="customRating" spacing="var(--spacing)"><Rating defaultValue={2} max={1} /></Box>
        </Stack>

        <Stack direction="row" spacing="var(--spacing)" alignItems="center" className="custom-stack">
          <Typography className="Typography">Catai</Typography>
          <Box className="customRating" spacing="var(--spacing)"><Rating defaultValue={2} max={1} /></Box>
        </Stack>

        <Stack direction="row" spacing="var(--spacing)" alignItems="center" className="custom-stack">
          <Typography className="Typography">In Movimento</Typography>
          <Box className="customRating" spacing="var(--spacing)"><Rating defaultValue={2} max={1} /></Box>
        </Stack>

        <Stack direction="row" spacing="var(--spacing)" alignItems="center" className="custom-stack">
          <Typography className="Typography">Fidays for Future</Typography>
          <Box className="customRating" spacing="var(--spacing)"><Rating defaultValue={2} max={1} /></Box>
        </Stack>

        <Stack direction="row" spacing="var(--spacing)" alignItems="center" className="custom-stack">
          <Typography className="Typography">LGBTQ+ Community</Typography>
          <Box className="customRating" spacing="var(--spacing)"><Rating defaultValue={2} max={1} /></Box>
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
          <Typography className="TypographyFooter">Termini di servizio</Typography>
          <Typography className="TypographyFooter">Informative sulla privacy</Typography>
          <Typography className="TypographyFooter">Norme sui cookies</Typography>
          <Typography className="TypographyFooter">Annunci</Typography>
          <Typography className="TypographyFooter">Chi siamo</Typography>
          <Typography className="TypographyFooter">Nome sistema, inc. ® 2023</Typography>
        </Stack>
       </Drawer>
    </Box>
  );
  }