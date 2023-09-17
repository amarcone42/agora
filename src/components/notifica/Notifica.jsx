'use client'
import { Card } from "../../lib/mui"
import React from "react"
import './notifica.scss'
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';


export default function Notifica  ({imageSrc, title, name, content, date, type}) {
    
    const CustomIcon = ({ nameIcon: NameIcon }) => {
        return <NameIcon className="post-type"/>;
      };

    if(type ==="Like")
    {
       var Avatar = new String("icona-profilo");
       var Follow = new String("hiden");
       var Info = new String("hiden");
       var typeIcon = FavoriteIcon;
    }
    else if (type === "Commento")
    {
        Avatar = new String("icona-profilo");
        Follow = new String("follow");
        Info = new String("info-event");
        typeIcon = CommentIcon;
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
            
            <CustomIcon nameIcon={typeIcon} />

        </div>

        <div className={Info}>
         <h4 className="date">{date}</h4>
        </div>

        <div className='content'>
            <p>{content}</p>
        </div>

    </Card>
)
}