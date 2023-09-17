'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import './buttoncreate.scss';
import { Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonIcon from '@mui/icons-material/Person';
import Avatar from '@mui/material/Avatar';



import ImageIcon from '@mui/icons-material/Image';
import EventIcon from '@mui/icons-material/Event';
import NewspaperIcon from '@mui/icons-material/Newspaper';


import { useState } from 'react';
import { useMediaQuery } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

//dialog imports
import '../account/groupform.scss'
import '../session/dialog.scss'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

//radio imports
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

//checkbox imports
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';


function NewsForm() {
  return(
    <div id='news-form-content'>
      <div id='post-main-info-section'>
        <TextField
          margin="dense"
          id="eventtitle"
          label="Titolo"
          type="text"
          fullWidth
          variant="filled"
        />
        <TextField
          margin="dense"
          id="eventdate"
          label="Data"
          type="date"
          
          variant="filled"
        />
      </div>
      <TextField
          margin="dense"
          id="groupdescription"
          label="Descrizione"
          type="text"
          fullWidth
          multiline
          rows={4}
          variant="filled"
      />
    </div>
  );
}
function EventForm() {
  return(
    <div id='event-form-content'>
      <div id='post-main-info-section'>
        <TextField
          margin="dense"
          id="eventtitle"
          label="Titolo"
          type="text"
          fullWidth
          variant="filled"
        />
        <TextField
          margin="dense"
          id="eventdate"
          label="Data"
          type="date"
          
          variant="filled"
        />
      </div>
      <TextField
          margin="dense"
          id="groupdescription"
          label="Descrizione"
          type="text"
          fullWidth
          multiline
          rows={4}
          variant="filled"
      />
    </div>
  );
}
function MomentForm() {
  return(
    <div id='moment-form-content'>
      <div id='post-main-info-section'>
        <TextField
          margin="dense"
          id="eventtitle"
          label="Titolo"
          type="text"
          fullWidth
          variant="filled"
        />
        <TextField
          margin="dense"
          id="eventdate"
          label="Data"
          type="date"
          
          variant="filled"
        />
      </div>
      <TextField
          margin="dense"
          id="groupdescription"
          label="Descrizione"
          type="text"
          fullWidth
          multiline
          rows={4}
          variant="filled"
      />
    </div>
  );
}


export default function ButtonCreate({type, label, id}) {
  var variant = '' 
  
  if (label) {
    variant = 'extended';
  }

  if(!id) {
    id='';
  }

  var buttonid = "create-button-mobile";
  var menuid = "create-menu-mobile";
  var originhorizontal = 'right';
  var originvertical = 'top';

  const desktopobj = {type:"desktop"};
  if (JSON.stringify(type) === JSON.stringify(desktopobj)) {
    buttonid = "create-button-desktop";
    menuid = "create-menu-desktop";
    originhorizontal = 'left';
    originvertical = 'bottom';
  }
  

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const [typevalue, setValue] = React.useState(0);
  const [sezioneAttiva, setSezioneAttiva] = useState('Notifiche'); // stato per tenere traccia della sezione attiva

  const mostraSezione = (sezione) => {
    setSezioneAttiva(sezione); // imposta la sezione attiva sulla base del pulsante cliccato
  };

  const isLargeScreen = useMediaQuery('(min-width:1200px)');

  const PostTypeSelector = () => {
    return (
      <Box sx={{ width: 500 }}>
        <BottomNavigation
          showLabels
          value={typevalue}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          className='bottom-group'
        >
          
          <BottomNavigationAction label="Momento"  className='botto' 
            style={{backgroundColor:typevalue === 0 ? '#FFDE18' : 'transparent', color:'#333234' // Cambia il colore di sfondo quando il valore è 0, e il colore della label
            }} 
            onClick={() => mostraSezione('Notifiche')}/>

          <BottomNavigationAction label="Evento" className='botto' style={{
              backgroundColor: typevalue === 1 ? '#FFDE18' : 'transparent', color:'#333234'}}
              onClick={() => mostraSezione('Calendario')}/>

          <BottomNavigationAction label="Notizia" className='botto' style={{
              backgroundColor:typevalue === 2 ? '#FFDE18' : 'transparent', color:'#333234'}}
              onClick={() => mostraSezione('Salvati')}/>

        </BottomNavigation>
      </Box>
    );
  }

  const [state, setOpenDialog] = React.useState(false);
  
  const handleDialogClickOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };
  const CreateGroupDialog = () => {
    
    return (
      <Dialog open={state} onClose={handleDialogClose}  id='new-group-form' className='dialog-card'>
        <DialogTitle>Crea contenuti</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
          <PostTypeSelector/>
          <EventForm/>
        </DialogContent>
        
        <DialogActions>
          <Button variant="outlined" onClick={handleDialogClose}>Annulla</Button>
          <Button variant="contained" className='submit' onClick={handleDialogClose}>Crea</Button>
        </DialogActions>
      </Dialog>
    );
  }



  return (
    <div>
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <Fab 
          onClick={handleClick}
          id={id} 
          className="fab" 
          variant={variant} 
          aria-label="add"
        >
          <AddIcon className="Add"/>
          <Typography className='label'>{label}</Typography>
        </Fab>      
      </Box>
      <div>
        <React.Fragment>
          <Menu
            anchorEl={anchorEl}
            id={menuid}
            class='user-account-menu'
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'transparent',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: originhorizontal, vertical: originvertical }}
            anchorOrigin={{ horizontal: originhorizontal, vertical: originvertical }}
          >
            <MenuItem onClick={handleDialogClickOpen}>
              Crea notizia
              <ListItemIcon className='icon'>
                <NewspaperIcon fontSize="small" />
              </ListItemIcon>
            </MenuItem>
            <MenuItem onClick={handleDialogClickOpen}>
              Crea evento              <ListItemIcon className='icon'>
                <EventIcon fontSize="small" />
              </ListItemIcon>
            </MenuItem>
            <MenuItem onClick={handleDialogClickOpen}>
              Crea momento
              <ListItemIcon className='icon'>
                <ImageIcon fontSize="small" />
              </ListItemIcon>
            </MenuItem>
          </Menu>
        </React.Fragment>
        <CreateGroupDialog/>
      </div>
    </div>
  );
}

