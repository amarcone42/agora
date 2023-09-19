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
import Searchbar from '../searchbar/Searchbar';
import './contentchatpage.scss';
import Chatbox from '../chatbox/Chatbox';
import { useRouter } from 'next/navigation'
import ButtonCreate from '../buttoncreate/ButtonCreate';

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));



export default function ContentHomepage () {

    const router = useRouter()

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
    <Searchbar className="searchbar" name='Chat' type="chat"></Searchbar>
      </DrawerHeader>
      <Divider />
      
    <Divider className='divider'/>
   
       
      <Divider />
      <div className='resizer'>
      <div onClick={() => router.push('/messages')} className="sidemargin" style={{ cursor: 'pointer' }}> 
            <Chatbox userName="Marco Rossi" messagePreview="Congratulazioni per tutto!" time="16:02" />
            <Chatbox userName="Luigi Verdi" messagePreview="Va bene." time="15:34" />
            <Chatbox userName="Anna Esposito" messagePreview="Ci vediamo dopo." time="15:09" />
            <Chatbox userName="Luca Bianchi" messagePreview="Capisco, allora poi vediamo." time="14:02" />
            <Chatbox userName="Francesco Neri" messagePreview="LOL, non me l'aspettavo!" time="13:45" />
            <Chatbox userName="Giulia Rossi" messagePreview="Congratulazioni!" time="13:00" />
            <Chatbox userName="Lucy Styles" messagePreview="Ti faremo sapere." time="12:56" />
            <Chatbox userName="Mara Giorgi" messagePreview="Ne è valsa la pena." time="12:13" />
            <Chatbox userName="Antonio Belli" messagePreview="Non ti preoccupare..." time="12:45" />
            <Chatbox userName="Carmela Iantosca" messagePreview="Non mi sento molto bene..." time="12:30" />
            <Chatbox userName="Franco Marcone" messagePreview="Hai fatto benissimo!" time="11:02" />
            <Chatbox userName="Giovanna Giorgia" messagePreview="Giovedì organizzeremo la marcia!" time="11:01" />
            <Chatbox userName="Vincenzo Rossi" messagePreview="Contaci, ti aspetto!" time="09:05" />
            </div>
          </div>

      <Stack   className="footer">
        <ButtonCreate id="fab-chat" label="SCRIVI"></ButtonCreate>
        </Stack>
    </Box>
  )
}