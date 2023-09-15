import React from 'react';
import './chatuserinfo.scss'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function ChatUserInfo() {
  return (
    <div className="user-info">
      
        <AccountCircleIcon className="user-image"></AccountCircleIcon>
      
      <div className="user-details">
        <h1 className="user-name">Ugo Martini</h1>
        <div className="user-status">Online</div>
        
      </div>
    </div>
  );
}

export default ChatUserInfo;
