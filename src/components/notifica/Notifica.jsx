'use client'
import { Card } from "../../lib/mui"
import React from "react"
import './notifica.scss'
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BottomNavigation from '@mui/material/BottomNavigation';


export default function Notifica  ({imageSrc, title, name, content, date, type}) {
    const [value, setValue] = React.useState(0);
    const CustomIcon = ({ nameIcon: NameIcon }) => {
        return <NameIcon className="post-type"/>;
      };

      let showButton = false; // variabile per controllare la visibilità del pulsante iscriviti
      let showButtone = false; // variabile per controllare la visibilità del pulsante aggiungi

    if(type ==="Like")
    {
       var Avatar = new String("icona-profilo");
       var Follow = new String("hiden");
       var Info = new String("hiden");
       var typeIcon = FavoriteIcon;
       showButton = false;
       showButtone = false;
    }
    else if (type === "Commento")
    {
        Avatar = new String("icona-profilo");
        Follow = new String("follow");
        Info = new String("info-event");
        typeIcon = CommentIcon;
        showButton = false;
        showButtone = false;
    }
    else if (type === "Utente")
    {
        Avatar = new String("icona-profilo");
        Follow = new String("follow");
        Info = new String("info-event");
        typeIcon = CommentIcon;
        showButton = false;
        showButtone = true;
    }
    else if (type === "Gruppo")
    {
        Avatar = new String("icona-profilo");
        Follow = new String("follow");
        Info = new String("info-event"); 
        typeIcon = CommentIcon;
        showButton = true;
        showButtone = false;
    }

 return (
    <Card className="post">
        <div className='info'>
            <div className="user-info"> 
                
            <img 
            className={Avatar}  /*icona-profilo per il post/ icona-Event per Evento/News */
            src={imageSrc}/>

                <div className="names">
                    <h2 className="main-name">{title}</h2>
                    <h5 className="sec-name">{name}</h5>
                </div>
            </div> 
            
            {(type === "Like" || type === "Commento") &&
            <CustomIcon nameIcon={typeIcon} />
            }

        </div>

        <div className={Info}>
         <h4 className="date">{date}</h4>
        </div>

        <div className='content'>
            <p>{content}</p>
        </div>

        {showButton && 
        <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className='bottom-group'
      >
        <BottomNavigationAction
              label="Iscriviti"
              className="searcha"
              style={{
                backgroundColor: value === 0 ? '#FFDE18' : 'trasparent',
                color: '#333234',
              }} />
              </BottomNavigation>
            }

        {showButtone && 
        <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        className='bottom-group'
      >
        <BottomNavigationAction
              label="Aggiungi"
              className="searcha"
              style={{
                backgroundColor: value === 0 ? '#FFDE18' : 'trasparent',
                color: '#333234',
              }} />
              </BottomNavigation>
            }

    </Card>
)
}