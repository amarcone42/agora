'use client'
import './searchbar.scss';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useRouter } from 'next/navigation';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "rgba(235, 235, 235, 0.15)",
    '&:hover': {
      backgroundColor: "rgba(128, 128, 128, 0.25)",
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '350%',
      [theme.breakpoints.up('sm')]: {
        width: '20ch',
        '&:focus': {
          width: '25ch',
        },
      },
    },
  }));

  export default function Searchbar({ name, type }) {
    const [value, setValue] = React.useState(0);
    const router = useRouter();
    const fullname = "Cerca in " + name;
  
    let show = false; // variabile per controllare la visibilità dei pulsanti in activity
    let shows = false; // variabile per controllare la visibilità del pulsante in cerca

    
    if(type ==="attivita")
    {
       show = true;
       shows = false;
    }
    else if (type === "cerca")
    {
        show = false;
        shows = true;
    }
    else if (type === "chat")
    {
        show = false;
        shows = false;
    }

    return (
      
      <Toolbar>
        <Box sx={{ display: 'flex', flexGrow: 1 }} className='box'>
          
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder={fullname}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          

          {show &&
        <Box sx={{ marginLeft: 'auto' }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            className="bottom-groups">
              
            <BottomNavigationAction
              label="Notifiche"
              className="search"
              style={{
                backgroundColor: value === 0 ? '#FFDE18' : '#FFFFFF',
                color: '#333234',
              }}/>
  
            <BottomNavigationAction
              label="Salvati"
              className="bott"
              style={{
                backgroundColor: value === 1 ? '#FFDE18' : '#FFFFFF',
                color: '#333234',
              }}/>
            
          </BottomNavigation>
        </Box>
        }

        {shows &&
        <Box sx={{ marginLeft: 'auto' }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            className="bottom-groups">

            <BottomNavigationAction
              label="Filtri"
              className="search"
              style={{
                backgroundColor: value === 0 ? '#FFDE18' : '#FFFFFF',
                color: '#333234',
              }}/>
 
          </BottomNavigation>
        </Box>
        }
      </Box>
      </Toolbar>
    );
  }