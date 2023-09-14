import React from 'react';
import './messager.scss'; 
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';

const CustomIcon = ({ nameIcon: NameIcon }) => {
    return <NameIcon className="icona" />;
  };

function Messager() {
  return (
    <div className="sezione-invia-messaggi position-absolute">
  {/* Message Box */}
  <div className="message-box position-absolute"></div>

  {/* WriteBox */}
  <div className="write-box position-absolute"></div>

  {/* Prompt */}
  <div className="prompt position-absolute">Messaggio</div>

  {/* Send */}
  <div className="send position-absolute"></div>

  {/* Vector */}
  <div className="vector position-absolute"></div>

  {/* Paperclip */}
  <AttachFileIcon className="paperclip"></AttachFileIcon>

  {/* Vector Paperclip */}
  <div className="vector-paperclip position-absolute"></div>

  {/* SymmetryHorizontal */}
  <div className="symmetry-horizontal position-absolute"></div>

  {/* Vector Symmetry */}
  <div className="vector-symmetry position-absolute"></div>

  {/* Invia */}
  <SendIcon className="invia position-absolute"></SendIcon>

  {/* Riempimento Giallo */}
  <div className="riempimento-giallo position-absolute"></div>

  {/* Vector Riempimento */}
  <div className="vector-riempimento position-absolute"></div>
</div>

  );
}

export default Messager;
