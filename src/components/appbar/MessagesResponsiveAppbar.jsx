'use client'
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import './appbar.scss';
import TemporaryDrawer from '../temporarydrawer/TemporaryDrawer';
import AccountMenu from '../account/AccountMenu';
import Searchbar from '../searchbar/Searchbar';
import ChatUserInfo from '../chatuserinfo/ChatUserInfo';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from 'next/navigation'
import MoreVertIcon from '@mui/icons-material/MoreVert';



const drawerWidth = 240;
const settings = ['Profilo utente', 'Crea gruppo', 'Impostazioni', 'Log out'];

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -drawerWidth,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

const ChatResponsiveAppBar = ({ name }) => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const router = useRouter()

  return (
    <div>
      <AppBar elevation={0} id="responsive-header">
        <Container maxWidth="lg">
          <Toolbar disableGutters className="toolbar" id="messagestoolbar">

        <div className='spacer'>

        
          <div onClick={() => router.push('/chat')} style={{ cursor: 'pointer' }}>
            <ArrowBackIcon></ArrowBackIcon>
          </div>
            <ChatUserInfo></ChatUserInfo>

            
            <MoreVertIcon className='space'/>
            
         
            
         

        </div>
            
            {/*aggiungi qui le modifiche all'appbar*/}

            
            
          </Toolbar>
        </Container>
      </AppBar>
      
    </div>
  );
};

export default ChatResponsiveAppBar;
