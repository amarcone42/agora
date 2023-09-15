'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
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
import Typography from '@mui/material/Typography';
import { alpha, styled } from "@mui/material/styles";
import './temporarydrawer.scss';
import ContentChatPage from '../chatcontent/ContentChatPage';

export default function TemporaryChatDrawerLeft(type) {
  const isDesktop = type && type.type === 'mobile';

  const [state, setState] = React.useState({
    left: false,
    right: false,
    sideTD: isDesktop ? 'right' : 'left',
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box id={isDesktop ? 'temporarydrawerright' : 'temporarydrawerleft'}
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={(event) => event.stopPropagation()} // Stop event propagation
      onKeyDown={toggleDrawer(anchor, false)}
    >
     <ContentChatPage/>
    </Box>
  );

  return (
    <div>
      {[state.sideTD].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button id={isDesktop ? 'hamburgericonright' : 'hamburgericonleft'} 
            onClick={toggleDrawer(anchor, true)}>
            <ChatIcon className="icon"/>
            
          </Button>
          <Drawer 
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

