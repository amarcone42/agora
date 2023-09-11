import DoneAllIcon from '@mui/icons-material/DoneAll';
import './chatmessage.scss'; 


const CustomIcon = ({ nameIcon: NameIcon }) => {
    return <NameIcon className="iconastato"/>;
  };


  function ChatRecMessage({ contenuto, data }) {
    return (
      <div className="messagerecbox">
          <div className="contenuto">{contenuto}</div>
          <div className='rows'>
            <div className="data">{data}</div>
          </div> 
      </div>
    );
  }
  

export default ChatRecMessage;
