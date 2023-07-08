'use client'
import { Card } from "../../lib/mui"
import React from "react"
import './post.scss'
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import ImageIcon from '@mui/icons-material/Image';

import EventIcon from '@mui/icons-material/Event';
import Button from '@mui/material/Button';

import NewspaperIcon from '@mui/icons-material/Newspaper';
import LinkIcon from '@mui/icons-material/Link';
import Link from '@mui/material/Link';

export default function Post  ({imageSrc, title, name, content, imgSrcContent, link, titleNews, nameEvent, date, type}) {
    
    const CustomIcon = ({ nameIcon: NameIcon }) => {
        return <NameIcon className="post-type"/>;
      };

      var Avatar = new String("icona-profilo");
      var Follow = new String("hiden");
      var Info = new String("hiden");
      var Linki = new String("hiden");
      var typeIcon = ImageIcon;

    if(type ==="News")
    {
        Avatar = new String("icona-Event");
        Follow = new String("hiden");
        Info = new String("hiden");
        Linki = new String("link-div");
        typeIcon = NewspaperIcon;
    }
    else if (type === "Event")
    {
        Avatar = new String("icona-Event");
        Follow = new String("follow");
        Info = new String("info-event");
        Linki = new String("hiden");
        typeIcon = EventIcon;
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
         <h4 className="name-event">{nameEvent}</h4>
         <h4 className="date">{date}</h4>
        </div>

        <div className='content'>
            <p>{content}</p>
        </div>

        <div className="content-imm">
            <img 
            className="imm"
            src={imgSrcContent}/> 
        </div>

        <div className={Follow}> 
         <Button variant="outlined" className="follow-button">Partecipa all'evento</Button>
        </div>

        <div className={Linki}>
            <Link href="#" className="link"><LinkIcon className="link-icon"/>{link}</Link>
            <h4 className="title">{titleNews}</h4>
        </div>

        <div className='interactions'>

             <IconButton
                className="like" 
                onClick={() => {// Gestisci il clic sull'icona qui
                }}>
                <FavoriteBorderIcon/>
                <h5 className="zero">0</h5>
             </IconButton>
             
             <IconButton
                className="commento" 
                onClick={() => {// Gestisci il clic sull'icona qui
                }}>
                <ChatBubbleOutlineIcon/>
                <h5 className="zero">0</h5>
             </IconButton>

             <IconButton
                className="save" 
                onClick={() => {// Gestisci il clic sull'icona qui
                }}>
                <TurnedInNotIcon/>
             </IconButton>

             <IconButton
                className="share" 
                onClick={() => {// Gestisci il clic sull'icona qui
                }}>
                <ShareIcon/>
             </IconButton>

        </div>
    </Card>
)
}
