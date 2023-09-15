import React from 'react';
import './chatbox.scss'; 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const CustomIcon = ({ nameIcon: NameIcon }) => {
    return <NameIcon className="icon" />;
  };


  function Chatbox({ userName, messagePreview, time }) {
    return (
      <div className="chat-1">
        <div className="post-background">
          <div className="person-circle">
            <CustomIcon nameIcon={AccountCircleIcon} />
          </div>
          <div className="rectangle-16">
            {/* You can add content for the rectangle here */}
          </div>
          <div className="vector">
            {/* You can add content for the vector here */}
          </div>
          <div className="user-name">{userName}</div>
          <div className="anteprima-messaggio">{messagePreview}</div>
          <div className="date">{time}</div>
        </div>
      </div>
    );
  }
  

export default Chatbox;
