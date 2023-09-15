import * as React from 'react';
import Button from '@mui/material/Button';
//import Button from '@mui/material-next/Button';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './dialog.scss'
import { useRouter } from "next/navigation";

export default function LoginFormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const router = useRouter()

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} sx={{borderRadius:'100px',textTransform: "none"}}>
        Accedi
      </Button>
      <Dialog open={open} onClose={handleClose} className='dialog-card'>
        <DialogTitle>Accedi ad Agorà</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
          <TextField
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="filled"
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="filled"
          />
        </DialogContent>
        
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>Annulla</Button>
          <Button variant="contained" onClick={() => router.push('/home')}>Accedi</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}



export function RegisterFormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} sx={{borderRadius:'100px',textTransform: "none"}}>
        Crea account
      </Button>
      <Dialog open={open} onClose={handleClose} className='dialog-card'>
        <DialogTitle>Registrati ad Agorà</DialogTitle>
        <DialogContent>
          <DialogContentText>
            
          </DialogContentText>
          <TextField
            margin="dense"
            id="username"
            label="Nome utente"
            type="username"
            fullWidth
            variant="filled"
          />
          <TextField
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="filled"
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="filled"
          />
        </DialogContent>
        
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>Annulla</Button>
          <Button variant="contained" onClick={handleClose}>Crea</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}