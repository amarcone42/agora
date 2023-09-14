import React from 'react';
import './searchbar.scss'; 
import SearchIcon from '@mui/icons-material/Search';

const CustomIcon = ({ nameIcon: NameIcon }) => {
    return <NameIcon className="icona" />;
  };

function Searchbar({ text }) {
  return (
    <div className="searchbar">
      <div className="rettangolo">
        <div className="icona">
          <SearchIcon className='icona'/>
        </div>
        <div className="testo">{text}</div>
      </div>
    </div>
  );
}

export default Searchbar;
