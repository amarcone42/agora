import React from 'react';
import './searchbar.scss'; 
import SearchIcon from '@mui/icons-material/Search';

const CustomIcon = ({ nameIcon: NameIcon }) => {
    return <NameIcon className="icona" />;
  };

function Searchbar() {
  return (
    <div className="search-bar">
      <div className="rettangolo">
      <div className="icona">
       <SearchIcon className='icona'/>
      </div>
      <div className="testo">Cerca in Chat</div>
    </div>
    </div>
  );
}

export default Searchbar;
