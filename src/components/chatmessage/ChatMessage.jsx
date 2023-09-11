import DoneAllIcon from '@mui/icons-material/DoneAll';
import './chatmessage.scss'; 


const CustomIcon = ({ nameIcon: NameIcon }) => {
    return <NameIcon className="iconastato"/>;
  };


  function ChatMessage({ contenuto, data }) {
    return (
      <div className="messagebox">
          <div className="contenuto">{contenuto}</div>
          <div className='rows'>
            <div className="data">{data}</div>
            <div className="statomessaggio">
          
           <DoneAllIcon className="iconastato" nameIcon={DoneAllIcon} />
          </div>
          </div> 
      </div>
    );
  }
  

export default ChatMessage;
