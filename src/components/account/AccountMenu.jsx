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
import './groupform.scss'
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

//Sezione per la formattazione del testo
import { styled } from '@mui/material/styles';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  '& .MuiToggleButtonGroup-grouped': {
    margin: theme.spacing(0.5),
    border: 0,
    '&.Mui-disabled': {
      border: 0,
    },
    '&:not(:first-of-type)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-of-type': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));
function CustomizedDividers() {
  const [alignment, setAlignment] = React.useState('left');
  const [formats, setFormats] = React.useState(() => ['normal']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div>
      <Paper
        className='text-custom-format'
        elevation={0}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        <StyledToggleButtonGroup
          size="small"
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
        >
          <ToggleButton value="left" aria-label="left aligned">
            <FormatAlignLeftIcon />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <FormatAlignCenterIcon />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            <FormatAlignRightIcon />
          </ToggleButton>
          <ToggleButton value="justify" aria-label="justified">
            <FormatAlignJustifyIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
        <StyledToggleButtonGroup
          size="small"
          value={formats}
          onChange={handleFormat}
          aria-label="text formatting"
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </StyledToggleButtonGroup>
        <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
      </Paper>
    </div>
  );
}

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
      <Dialog open={state} onClose={handleDialogClose}  id='new-group-form' className='dialog-card'>
        <DialogTitle>Crea gruppo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
          <div id='group-main-info-section'>
            <div>
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
            </div>
            <div id="group-info-icon" className='column'>
              <h4 className='section-title'>Icona</h4>
              <div className='row'>
                <div className='column'>
                  <label for="avatar">L’immagine che verrà utilizzata come icona per identificare il tuo gruppo.</label>
                  <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
                </div>
                <Avatar id='new-group-icon' variant="rounded">Foto</Avatar>
              </div>
            </div>
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
          <CustomizedDividers></CustomizedDividers>

          <div id='contents-section'>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">Privacy</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="public"
                name="radio-buttons-group"
              >
                <FormControlLabel value="private" control={<Radio />} label="Privato" />
                <FormControlLabel value="limited" control={<Radio />} label="Ristretto" />
                <FormControlLabel value="public" control={<Radio />} label="Pubblico" />
              </RadioGroup>
            </FormControl>
            <FormGroup id='contents-check'>
              <FormLabel id="demo-radio-buttons-group-label">Contenuti</FormLabel>
              <FormControlLabel control={<Checkbox />} label="NSFW" />
            </FormGroup>
          </div>
          
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

