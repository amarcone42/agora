'use client'
import './accountmenu.scss'
import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonIcon from '@mui/icons-material/Person';
import PersonAdd from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';

//dialog imports
import '../session/dialog.scss'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AccountMenu(type) {
  var buttonid = "user-account-mobile";
  var menuid = "account-menu-mobile";
  var originhorizontal = 'right';
  var originvertical = 'top';

  const desktopobj = {type:"desktop"};
  if (JSON.stringify(type) === JSON.stringify(desktopobj)) {
    buttonid = "user-account-desktop";
    menuid = "account-menu-desktop";
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



  const [state, setOpenDialog] = React.useState(false);
  
  const handleDialogClickOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };
  const CreateGroupDialog = () => {
    
    return (
      <Dialog open={state} onClose={handleDialogClose} className='dialog-card'>
        <DialogTitle>Crea gruppo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
          <TextField
            margin="dense"
            id="groupname"
            label="Nome"
            type="text"
            fullWidth
            variant="filled"
          />
          <TextField
            margin="dense"
            id="idgroup"
            label="Identificativo"
            type="text"
            fullWidth
            variant="filled"
          />
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
        </DialogContent>
        
        <DialogActions>
          <Button variant="outlined" onClick={handleDialogClose}>Annulla</Button>
          <Button variant="contained" onClick={() => router.push('/home')}>Crea</Button>
        </DialogActions>
      </Dialog>
    );
  }



  return (
    <div>
    <React.Fragment>
      <Box id={buttonid} className='user-account-icon' sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? menuid : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar className='profile-icon'>M</Avatar>
            <Typography flexWrap={1}
                className='username'
                variant="h6"
            >
            Michele Sorrentino
            </Typography>
          </IconButton>
        </Tooltip>
      </Box>
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
        <MenuItem className='title' onClick={handleClose}>
            <Typography 
                className='username'
                variant="h6"
            >
            Michele Sorrentino
            </Typography>
            <Avatar className="profile-icon"/> 
        </MenuItem>
        <Divider />
        <div>
          <MenuItem onClick={handleClose}>
            <ListItemIcon className='icon'>
              <PersonIcon fontSize="small" />
            </ListItemIcon>
            Profilo utente
          </MenuItem>
          <MenuItem onClick={handleDialogClickOpen}>
            <ListItemIcon className='icon'>
              <GroupAddIcon fontSize="small" />
            </ListItemIcon>
            Crea gruppo
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon className='icon'>
              <Settings fontSize="small" />
            </ListItemIcon>
            Impostazioni
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon className='icon'>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </div>
      </Menu>
    </React.Fragment>
    <CreateGroupDialog/>
    </div>
  );
}

